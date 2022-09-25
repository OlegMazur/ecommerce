import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import {
  ISubCategory,
  updateSubCategoryById,
} from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./sub-category-card.module.scss";
interface IProps {
  subCategory: ISubCategory;
  
  showProductsHandler: (subCategoryId: number | null) => void;
}

function SubCategoryCard({ subCategory, showProductsHandler }: IProps) {
  const { id, title, img } = subCategory;
  const [preview, setPreview] = useState<null | string>(null);
  const [uploadImg, setuploadImg] = useState<any>();
  const dispatch = useAppDispatch();
  const [changeMod, setChangeMod] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files?.[0]) {
      const file = e.currentTarget.files[0];
      setuploadImg(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    }
  };
  const changeImgTitleHandler = () => {
    const actualImg = uploadImg ? uploadImg : img;
    dispatch(updateSubCategoryById({ id, title: cardTitle, img: actualImg }));
  };

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
        {preview && (
          <button
            onClick={changeImgTitleHandler}
            className={styles.submitImgBtn}
          >
            Зберегти зміни
          </button>
        )}
      </div>
      <div className={styles.titleBlock}>
        <div>Назва підкатегорії:</div>
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
        {changeMod ? (
          <button
            onClick={changeImgTitleHandler}
            className={styles.changeTitleBtn}
          >
            Змінити{" "}
          </button>
        ) : (
          <button
            onClick={() => setChangeMod(true)}
            className={styles.changeTitleBtn}
          >
            Редагувати
          </button>
        )}
         <div>
          <button onClick={() => showProductsHandler(id)}>
            Показати товари
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
