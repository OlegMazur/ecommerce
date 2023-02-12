import React, { useEffect, useState } from "react";
import { UpdateStatus } from "../../../../common/enums/adminConstant";
import { imgUrlWraper } from "../../../../services/helpers/img-helpers";
import { useAppDispatch } from "../../../../store/hooks";
import {
  IDevice,
  updateDeviceById,
} from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./product-card.module.scss";
interface IProps {
  product: IDevice;
  status?: string;
  showActiveProductHandler: (activeProductId: number | null) => void;
}
function ProductCard({ product, showActiveProductHandler, status }: IProps) {
  const { id, name, img1, price, subCategoryId, availability, imgArr } =
    product;
  const [preview, setPreview] = useState<null | string>(null);
  const [uploadImg, setUploadImg] = useState<any>();
  const [productAvailability, setProductAvailability] = useState(availability);
  const dispatch = useAppDispatch();
  const [changeMod, setChangeMod] = useState(false);
  const [cardTitle, setCardTitle] = useState(name);
  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files?.[0]) {
      const file = e.currentTarget.files[0];
      setUploadImg(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setChangeMod(true);
    }
  };

  let img = imgUrlWraper(img1);
  const changeImgTitleHandler = () => {
    const actualImg = uploadImg ? uploadImg : img1;
    dispatch(
      updateDeviceById({
        id,
        name: cardTitle,
        img1: actualImg,
        price,
        subCategoryId,
        availability,
        imgArr,
      })
    );
  };
  useEffect(() => {
    if (status === UpdateStatus.SUCCESSFUL) {
      setChangeMod(false);
    }
  }, [status]);
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imgBlock}>
        <img
          src={preview ? preview : img}
          alt="categoryImg"
          className={styles.img}
        />
        <input
          type="file"
          onChange={imgHandler}
          accept="image/*"
          className={styles.uploadImgBtn}
        ></input>
      </div>
      <div className={styles.descriptionBlock}>
        <div className={styles.titleBlock}>
          <div>Назва товару:</div>
          {changeMod ? (
            <input
              type="text"
              value={cardTitle}
              className={styles.titleInput}
              onChange={(e) => setCardTitle(e.currentTarget.value)}
            />
          ) : (
            <div className={styles.title}>{cardTitle}</div>
          )}
          {/* {changeMod ? (
            <button
              onClick={changeImgTitleHandler}
              className={styles.changeTitleBtn}
            >
              Зберегти зміни{" "}
            </button>
          ) : (
            <button
              onClick={() => setChangeMod(true)}
              className={styles.changeTitleBtn}
            >
              Редагувати назву товару
            </button>
          )} */}
          {/* <div>
            <button onClick={() => showActiveProductHandler(id)}>
              Показати товар
            </button>
          </div> */}
        </div>
        <div className={styles.availabilityBlock}>
          <div>Залишок</div>
          {changeMod ? (
            <input
              type="number"
              value={productAvailability}
              className={styles.titleInput}
              onChange={(e) =>
                setProductAvailability(Number(e.currentTarget.value))
              }
            />
          ) : (
            <div className={styles.title}>{productAvailability}</div>
          )}
          {/* {changeMod ? (
            <button
              onClick={changeImgTitleHandler}
              className={styles.changeTitleBtn}
            >
              Зберегти зміни{" "}
            </button>
          ) : (
            <button
              onClick={() => setChangeMod(true)}
              className={styles.changeTitleBtn}
            >
              Редагувати назву товару
            </button>
          )} */}
          {/* <div>
            <button onClick={() => showActiveProductHandler(id)}>
              Показати товар
            </button>
          </div> */}
        </div>
        {/* {preview && (
          <button
            onClick={changeImgTitleHandler}
            className={styles.submitImgBtn}
          >
            Зберегти зміни
          </button>
        )} */}
        <div className={styles.buttonBlock}>
          <button
            className={styles.changeTitleBtn}
            onClick={() => showActiveProductHandler(id)}
          >
            Показати опис товару
          </button>

          {changeMod ? (
            <button
              onClick={changeImgTitleHandler}
              className={styles.changeTitleBtn}
            >
              Зберегти зміни{" "}
            </button>
          ) : (
            <button
              onClick={() => setChangeMod(true)}
              className={styles.changeTitleBtn}
            >
              Редагувати
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
