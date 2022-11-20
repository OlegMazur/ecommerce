import React, { useEffect, useState } from "react";
import {  UpdateStatus } from "../../../../common/enums/enums";
import { useAppDispatch } from "../../../../store/hooks";
import {  addImgById, getDeviceById, IDevice, updateDeviceById } from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./product-page.module.scss";
import ProductFields from "./productsFields/product-fields";
import ProductInputFields from "./productInputFields/product-input-fields";
import { useMergedState } from "../../../../hooks/useMergedState";
interface IProp {
  activeProduct: IDevice;
  status?: string;
  findActiveProduct: any;
  updateAdmin:any
}
function NewProductPage({ activeProduct, status, updateAdmin }: IProp) {
  const [changeMod, setChangeMod] = useState(false);
  const [preview, setPreview] = useState<null | string>(null);
  const [uploadImg, setUploadImg] = useState<any>();
  const [data, setData] = useMergedState<IDevice>(activeProduct);
  
  const dispatch = useAppDispatch();
 const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files?.[0]) {
      const file = e.currentTarget.files[0];
      setUploadImg(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setChangeMod(true);
    }
  };
  const savePhotoHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
    const {id}=data;
    dispatch(addImgById({id,uploadImg}));
    dispatch(getDeviceById(Number(id)));
  }
  const changeModHandler = () => {
    const newActiveProduct={...activeProduct};
    setData(newActiveProduct)
    setChangeMod(true);
  };
  const submitChangeHandler = () => {
    

    dispatch(updateDeviceById(data));
    setChangeMod(false);
  };
  // const mainImgHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const currentImg = e.currentTarget.name;
  //   let newImgArrWithoutImg = newImgArr?.filter((img) => img !== currentImg);
  //   if (newImgArrWithoutImg) {
  //     let newSortImgArr = [currentImg, ...newImgArrWithoutImg];
  //     let newStr = newSortImgArr.join(",");
  //     setImgArr(newStr);
  //     setImg1(currentImg);
  //     submitChangeHandler();
  //   }
  // };
  // const deleteImgHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const currentImg = e.currentTarget.name;
  //   let newImgArrWithoutImg = newImgArr?.filter((img) => img !== currentImg);
  //   if (newImgArrWithoutImg) {
  //     setImgArr(newImgArrWithoutImg.join(","));
  //   }
  //   submitChangeHandler();
  // };
  useEffect(() => {
    if (status === UpdateStatus.SUCCESSFUL) {
      setChangeMod(false);
      setUploadImg(null);
      setPreview(null);
      updateAdmin()
    }
  }, [status]);
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>{activeProduct.name}</h1>
      <div className={styles.productDetails}>
        {changeMod ? (
          <>
         < ProductInputFields  

         data={data}
         setData={setData}
         imgHandler={imgHandler}
         preview={preview}
         uploadImg={uploadImg}
         savePhotoHandler={savePhotoHandler}
         />
            {/* 
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Ціна </div>
              <input
                value={price}
                name={InputNames.PRICE}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Валюта </div>
              <select
                value={currency ? currency : "немає даних"}
                name={InputNames.CURRENCY}
                onChange={(e) => changeInputHandler(e)}
                className={styles.itemSelect}
              >
                <option className={styles.itemOption} value={currencyName.USD}>
                  {" "}
                  USD
                </option>
                <option className={styles.itemOption} value={currencyName.UAH}>
                  {" "}
                  UAH
                </option>
              </select>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Наявність </div>
              <input
                value={availability}
                name={InputNames.AVAILABILITY}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Головне фото </div>
              <img src={preview ? preview : img1} alt="categoryImg" className={styles.img} />
              <input
                type="file"
                name={InputNames.IMG1}
                onChange={imgHandler}
                accept="image/*"
                className={styles.uploadImgBtn}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Усі фото </div>
              <div className={styles.imgBlock}>
                {newImgArr?.[0] &&
                  newImgArr.map((img, i) => (
                    <div key={i + Date.now()} className={styles.imgItem}>
                      <img src={img} alt="categoryImg" className={styles.img} />
                      <button name={img} onClick={(e) => deleteImgHandler(e)} className={styles.btn}>
                        Видалити фото
                      </button>
                      <button name={img} onClick={(e) => mainImgHandler(e)} className={styles.btn}>
                        Зробити головною
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Одиниця виміру </div>
              <input
                value={unit}
                name={InputNames.UNIT}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Рейтинг </div>
              <input
                value={rating ? String(rating) : ""}
                name={InputNames.RATING}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>

            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Особливі відмітки </div>
              <input
                value={label}
                name={InputNames.LABEL}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Колір </div>
              <input
                value={color}
                name={InputNames.COLOR}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Потужність</div>
              <input
                value={power}
                name={InputNames.POWER}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Ємність </div>
              <input
                value={capacity}
                name={InputNames.CAPACITY}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Колірна температура </div>
              <input
                value={colorTemp}
                name={InputNames.COLOR_TEMP}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Популярні </div>
              <select
                value={favorite ? "так" : "ні"}
                name={InputNames.FAVORITE}
                onChange={(e) => changeInputHandler(e)}
                className={styles.itemSelect}
              >
                <option className={styles.itemOption} value={"true"}>
                  {" "}
                  Так
                </option>
                <option className={styles.itemOption} value={"false"}>
                  {" "}
                  Ні
                </option>
              </select>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Модель </div>
              <input
                value={model}
                name={InputNames.MODEL}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}> Країна виробник</div>
              <input
                value={madeIn}
                name={InputNames.MADE_IN}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Оптова ціна</div>
              <input
                value={optPrice}
                name={InputNames.OPT_PRICE}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}> Тип товару</div>
              <input
                value={typeName}
                name={InputNames.TYPE_NAME}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Виробник</div>
              <input
                value={brandName}
                name={InputNames.BRAND_NAME}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div> */}
          </>
        ) : (
          <>
            <ProductFields activeProduct={activeProduct} />
          </>
        )}
      </div>
      <div className={styles.buttonBlock}>
        {changeMod ? (
          <button className={styles.changeModButton} onClick={submitChangeHandler}>
            <div>З б е р е г т и ... з м і н и</div>
          </button>
        ) : (
          <button className={styles.changeModButton} onClick={changeModHandler}>
            <div>Р е д а г у в а т и </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default NewProductPage;
