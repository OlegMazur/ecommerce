import React from "react";
import { IDevice } from "../../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./product-fields.module.scss";
interface IProp {
  activeProduct: IDevice;
}

function ProductFields({ activeProduct }: IProp) {
  const {
    price,
    name,
    availability,
    img1,
    imgArr,
    currency,
    unit,
    label,
    color,
    power,
    capacity,
    colorTemp,
    favotite,
    rating,
    model,
    madeIn,
    optPrice,
    typeName,
    brandName,
  } = activeProduct;
  let newImgArr: string[] | undefined;
  const imgArrCreator = (arr: string) => arr.split(",");
  if (imgArr) {
    newImgArr = imgArrCreator(imgArr);
  }

  return (
    <>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Назва товару</div>
        <div className={styles.itemValue}>{name}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Ціна</div>
        <div className={styles.itemValue}>{price}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Валюта</div>
        <div className={styles.itemValue}>{currency}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Рейтинг</div>
        <div className={styles.itemValue}>{rating}</div>
      </div>

      {newImgArr && newImgArr.length > 0 ? (
        <div className={styles.itemImgBlock}>
          <div className={styles.itemName}>Усі фото</div>
          <div className={styles.imgBlock}>
            {newImgArr.map((item, index) =>
              index === 0 ? (
                <div key={index + Date.now()}>
                  <div className={styles.itemName}>Головне фото</div>
                  <img src={item} alt="productImg" className={styles.img} />
                </div>
              ) : (
                <div key={index + Date.now()}>
                  <div className={styles.itemName}> фото {index}</div>
                  <img src={item} alt="productImg" className={styles.img} />
                </div>
              )
            )}
          </div>
        </div>
      ) : (
        <div className={styles.itemBlock}>
          <div className={styles.itemName}>Головне фото</div>
          <img src={img1} alt="productImg" className={styles.img} />
        </div>
      )}

      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Одиниця виміру</div>
        <div className={styles.itemValue}>{unit}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Наявність</div>
        <div className={styles.itemValue}>{availability}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Особливі відмітки</div>
        <div className={styles.itemValue}>{label}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Колір</div>
        <div className={styles.itemValue}>{color}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Потужність</div>
        <div className={styles.itemValue}>{power}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Ємність</div>
        <div className={styles.itemValue}>{capacity}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Колірна температура</div>
        <div className={styles.itemValue}>{colorTemp}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Популярні</div>
        <div className={styles.itemValue}>{favotite ? "так" : "ні"}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Модель</div>
        <div className={styles.itemValue}>{model}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Країна виробник</div>
        <div className={styles.itemValue}>{madeIn}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Оптова ціна</div>
        <div className={styles.itemValue}>{optPrice}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Тип товару</div>
        <div className={styles.itemValue}>{typeName}</div>
      </div>
      <div className={styles.itemBlock}>
        <div className={styles.itemName}>Виробник</div>
        <div className={styles.itemValue}>{brandName}</div>
      </div>
    </>
  );
}

export default ProductFields;
