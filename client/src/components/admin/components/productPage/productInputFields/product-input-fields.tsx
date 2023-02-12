import React from "react";
import { currencyName, InputNames } from "../../../../../common/enums/adminConstant";
import { FormField } from "../../../../../common/enums/component/form-field";
import { IDevice } from "../../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./product-input-fields.module.scss";
interface IProp {
  data: IDevice;
  setData: any;
  imgHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadImg: any;
  preview: any;
  savePhotoHandler:any;
}

function ProductInputFields({ data, setData, imgHandler, uploadImg, preview,savePhotoHandler }: IProp) {
  const validateAvailability = (stringValue: string): number | undefined => {
    const max = Math.max(parseInt(stringValue), 0);
    return max;
  };
  const changeFavotite = (stringValue: string | undefined): boolean => {
    return stringValue === "true" ? true : false;
  };

  return (
    <>
    <div className={styles.itemBlock}>
          <div className={styles.itemName}>Головне фото </div>
          <img src={preview ? preview : ""} alt="categoryImg" className={styles.img} />
          <input
            type="file"
            name={InputNames.IMG1}
            onChange={imgHandler}
            accept="image/*"
            className={styles.uploadImgBtn}
          ></input>
          {preview && <button onClick={savePhotoHandler} className={styles.btn}>Завантажити фото</button>}
        </div>
      <form>
        <FormField
          name={InputNames.NAME}
          label="Назва товару"
          value={data.name}
          onChange={(name) => setData({ name })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.PRICE}
          label="Ціна"
          value={data.price}
          onChange={(price) => setData({ price })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />

        <select
          value={data.currency}
          name={InputNames.CURRENCY}
          onChange={(event) => setData({ currency: event.target.value })}
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
        <FormField
          name={InputNames.AVAILABILITY}
          label="Наявність"
          type="number"
          value={data.availability ? data.availability : "0"}
          onChange={(availability) => setData({ availability: validateAvailability(availability) })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        
        <div className={styles.itemBlock}>
          <div className={styles.itemName}> Фото </div>
          <div className={styles.imgBlock}>
            {data.imgArr?.[0] &&
              data.imgArr.split(",").map((img, i) => (
                <div key={i + Date.now()} className={styles.imgItem}>
                 
                    <img src={img} alt="categoryImg" className={styles.img} />
              

                  <button name={img} className={styles.btn}>
                    Зробити головною
                  </button>
                </div>
              ))}
          </div>
        </div>

        <FormField
          name={InputNames.UNIT}
          label="Одиниця виміру"
          value={data.unit}
          onChange={(unit) => setData({ unit })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.LABEL}
          label="Особливі відмітки"
          value={data.label}
          onChange={(label) => setData({ label })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.COLOR}
          label="Колір"
          value={data.color}
          onChange={(color) => setData({ color })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.POWER}
          label="Потужність"
          value={data.power}
          onChange={(power) => setData({ power })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.CAPACITY}
          label="Ємність "
          value={data.capacity}
          onChange={(capacity) => setData({ capacity })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.COLOR_TEMP}
          label="Колірна температура  "
          value={data.colorTemp}
          onChange={(colorTemp) => setData({ colorTemp })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <div className={styles.itemBlock}>
          <div className={styles.itemName}>Популярні </div>
          <select
            value={data.favotite ? "true" : "false"}
            name={InputNames.FAVORITE}
            onChange={(event) => setData({ favotite: changeFavotite(event.currentTarget.value) })}
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
        <FormField
          name={InputNames.MODEL}
          label="Модель"
          value={data.model}
          onChange={(model) => setData({ model })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.MADE_IN}
          label="Країна виробник"
          value={data.madeIn}
          onChange={(madeIn) => setData({ madeIn })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.OPT_PRICE}
          label="Оптова ціна"
          value={data.optPrice}
          onChange={(optPrice) => setData({ optPrice })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.TYPE_NAME}
          label="Тип товару"
          value={data.typeName}
          onChange={(typeName) => setData({ typeName })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.BRAND_NAME}
          label="Виробник"
          value={data.brandName}
          onChange={(brandName) => setData({ brandName })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
        <FormField
          name={InputNames.BRAND_NAME}
          label="Підмодель"
          value={data.subModel}
          onChange={(subModel) => setData({ subModel })}
          classItemName={styles.itemName}
          classItemBlock={styles.itemBlock}
        />
      </form>
    </>
  );
}
export default ProductInputFields;
