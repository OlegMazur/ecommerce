import React, { useEffect, useState } from "react";
import { currencyName, InputNames, UpdateStatus } from "../../../../common/enums/enums";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getDeviceById, IDevice, updateDeviceById } from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./product-page.module.scss";
interface IProp {
  activeProduct: IDevice;
  status?: string;
  findActiveProduct: any;
}
function ProductPage({ activeProduct, status, findActiveProduct }: IProp) {
  
  const [changeMod, setChangeMod] = useState(false);
  const [preview, setPreview] = useState<null | string>(null);
  const [uploadImg, setUploadImg] = useState<any>();
  const {id}=activeProduct;
   const activeProducts=useAppSelector((state) => state.device.devices.rows);
  let activeProductDescription:any; 
   if(activeProducts.find((item) => item.id === id)){
    activeProductDescription =  activeProducts.find((item) => item.id === id);
   }    
  const {
  
    price: newPrice,
    name: newName,
    subCategoryId: newSubCategory,
    availability: newAvailability,
    img1: newImg1,
    imgArr: ImgArr,
    currency: newCurrency,
    unit: newUnit,
    label: newLabel,
    color: newcolor,
    power: newpower,
    capacity: newcapacity,
    colorTemp: newcolorTemp,
    favotite: newfavotite,
    model: newmodel,
    madeIn: newmadeIn,
    optPrice: newoptPrice,
    typeName: newtypeName,
    brandName: newbrandName,
  } = activeProductDescription;
 // console.log("activeProduct", activeProduct);
  const dispatch = useAppDispatch();
 
  
  // let name,price,rating,img1,imgArr,createdAt,updatedAt,typeId,brandId,info,subCategoryId,
  // searchQueries,currency,unit,availability,label,weight,height,length,location,color,
  // power,
  // capacity,
  // colorTemp,
  // favotite,
  // model,
  // madeIn,
  // optPrice,
  // typeName,
  // brandName
  // if(activeProductDescription){
  //   ({name,price,rating,img1,imgArr,createdAt,updatedAt,
  //     typeId,
  //     brandId,
  //     info,
  //     subCategoryId,
  //     searchQueries,
  //     currency,
  //     unit,
  //     availability,
  //     label,
  //     weight,
  //     height,
  //     length,
  //     location,
  //     color,
  //     power,
  //     capacity,
  //     colorTemp,
  //     favotite,
  //     model,
  //     madeIn,
  //     optPrice,
  //     typeName,
  //     brandName} = activeProductDescription)
  // }
  // let activeProductDescription=activeProducts.find(item => item.id === id);

  // if(activeProductDescription){
  //     Object.entries(activeProductDescription).map()
  // }

  //let isImgArr = activeProductDescription?.imgArr ? activeProductDescription.imgArr : null;
  // console.log("activeProductDescription",activeProductDescription);
  //let isCurrency = activeProductDescription?.currency ? activeProductDescription.currency : null;
  const [name, setName] = useState(newName);
  const [price, setPrice] = useState(newPrice);
  const [rating, setRating] = useState(activeProductDescription?.rating);
  const [img1, setImg1] = useState(newImg1);
  const [imgArr, setImgArr] = useState(ImgArr);
  const [info, setInfo] = useState(activeProductDescription?.info);
  const [subCategoryId, setSubCategoryId] = useState(newSubCategory);
  const [currency, setCurrency] = useState(newCurrency);
  const [unit, setUnit] = useState(newUnit);
  const [availability, setAvailability] = useState(newAvailability);
  const [label, setLabel] = useState(newLabel);
  const [color, setColor] = useState(newcolor);
  const [power, setPower] = useState(newpower);
  const [capacity, setCapacity] = useState(newcapacity);
  const [colorTemp, setColorTemp] = useState(newcolorTemp);
  const [favorite, setFavorite] = useState(newfavotite);
  const [model, setModel] = useState(newmodel);
  const [madeIn, setMadeIn] = useState(newmadeIn);
  const [optPrice, setOptPrice] = useState(newoptPrice);
  const [typeName, setTypeName] = useState(newtypeName);
  const [brandName, setBrandName] = useState(newbrandName);

  let newImgArr: string[] | undefined;

  // if (ImgArr) {
  //   newImgArr = ImgArr.split(",");
  // }
  const imgArrCreator = (arr: string) => {
    if (arr) {
      return arr.split(",");
    }
  };
  
    newImgArr=imgArrCreator(ImgArr);
   
  
 
  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files?.[0]) {
      const file = e.currentTarget.files[0];
      setUploadImg(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setChangeMod(true);
    }
  };

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.currentTarget.name) {
      case InputNames.NAME:
        setName(e.currentTarget.value);
        break;
      case InputNames.FAVORITE:
        e.currentTarget.value === "true" ? setFavorite(true) : setFavorite(false);
        break;
      case InputNames.AVAILABILITY:
        setAvailability(Number(e.currentTarget.value));
        break;
      case InputNames.BRAND_NAME:
        setBrandName(e.currentTarget.value);
        break;
      case InputNames.CAPACITY:
        setCapacity(e.currentTarget.value);
        break;
      case InputNames.COLOR:
        setColor(e.currentTarget.value);
        break;
      case InputNames.COLOR_TEMP:
        setColorTemp(e.currentTarget.value);
        break;
      case InputNames.CURRENCY:
        setCurrency(e.currentTarget.value);
        break;

      case InputNames.IMG_ARR:
        setImgArr(e.currentTarget.value);
        break;
      case InputNames.LABEL:
        setLabel(e.currentTarget.value);
        break;
      case InputNames.MADE_IN:
        setMadeIn(e.currentTarget.value);
        break;
      case InputNames.MODEL:
        setModel(e.currentTarget.value);
        break;
      case InputNames.OPT_PRICE:
        setOptPrice(e.currentTarget.value);
        break;
      case InputNames.POWER:
        setPower(e.currentTarget.value);
        break;
      case InputNames.PRICE:
        setPrice(e.currentTarget.value);
        break;
      case InputNames.RATING:
        setRating(Number(e.currentTarget.value));
        break;
      case InputNames.TYPE_NAME:
        setTypeName(e.currentTarget.value);
        break;
      case InputNames.UNIT:
        setUnit(e.currentTarget.value);
        break;
    }
  };

  const changeModHandler = () => {
    setChangeMod(true);
  };

  const submitChangeHandler = () => {
    const actualImg = uploadImg ? uploadImg : img1;
    const isFavorite = favorite ? favorite : false;
    dispatch(
      updateDeviceById({
        id,
        subCategoryId,
        name,
        img1: actualImg,
        price,
        availability,
        imgArr,
        currency,
        unit,
        label,
        color,
        power,
        capacity,
        colorTemp,
        favotite: isFavorite,
        model,
        madeIn,
        optPrice,
        typeName,
        brandName,
      })
    );
    findActiveProduct(id);
    setChangeMod(false);
  };
  const mainImgHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentImg = e.currentTarget.name;
    let newImgArrWithoutImg = newImgArr?.filter((img) => img !== currentImg);
    //console.log("newImgArr",newImgArr);
    if ( newImgArrWithoutImg) {
      let newSortImgArr =  [currentImg,...newImgArrWithoutImg];
      //newSortImgArr.unshift(currentImg);
      let newStr=newSortImgArr.join(",");
      setImgArr(newStr);
      setImg1(currentImg);
      submitChangeHandler();
      //console.log("newSortImgArr",newSortImgArr)
    }
  };
  const deleteImgHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //let deleteImg;
    const currentImg = e.currentTarget.name;
    let newImgArrWithoutImg = newImgArr?.filter((img) => img !== currentImg);
    if (newImgArrWithoutImg) {
      setImgArr(newImgArrWithoutImg.join(","));
    }
    submitChangeHandler();
  };
  useEffect(() => {
    if (status === UpdateStatus.SUCCESSFUL) {
      setChangeMod(false);
      setUploadImg(null);
      setPreview(null)
    }
  }, [status]);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <div className={styles.productDetails}>
        {changeMod ? (
          <>
            <div className={styles.itemBlock}>
              <div className={styles.itemName}>Назва товару </div>
              <input
                value={name ? name : "немає даних"}
                name={InputNames.NAME}
                className={styles.itemInput}
                onChange={changeInputHandler}
              ></input>
            </div>
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
            </div>
          </>
        ) : (
          <>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Назва товару</div>
              <div className={styles.itemValue}>{name}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Ціна</div>
              <div className={styles.itemValue}>{price}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Валюта</div>
              <div className={styles.itemValue}>{activeProductDescription?.currency}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Рейтинг</div>
              <div className={styles.itemValue}>{activeProductDescription?.rating}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Головне фото</div>
              <img src={newImg1} alt="productImg" className={styles.img} />
            </div>
            <div className={styles.itemNotChangeImgBlock}>
              <div className={styles.itemName}>Усі фото</div>
              <div className={styles.imgBlock}>
                {
                  newImgArr?.map((item, index) => (
                    <img src={item} key={index + Date.now()} alt="productImg" className={styles.img} />
                  ))}
              </div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Одиниця виміру</div>
              <div className={styles.itemValue}>{activeProductDescription?.unit}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Наявність</div>
              <div className={styles.itemValue}>{activeProductDescription?.availability}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Особливі відмітки</div>
              <div className={styles.itemValue}>{activeProductDescription?.label}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Колір</div>
              <div className={styles.itemValue}>{activeProductDescription?.color}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Потужність</div>
              <div className={styles.itemValue}>{activeProductDescription?.power}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Ємність</div>
              <div className={styles.itemValue}>{activeProductDescription?.capacity}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Колірна температура</div>
              <div className={styles.itemValue}>{activeProductDescription?.colorTemp}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Популярні</div>
              <div className={styles.itemValue}>{activeProductDescription?.favotite ? "так" : "ні"}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Модель</div>
              <div className={styles.itemValue}>{activeProductDescription?.model}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Країна виробник</div>
              <div className={styles.itemValue}>{activeProductDescription?.madeIn}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Оптова ціна</div>
              <div className={styles.itemValue}>{activeProductDescription?.optPrice}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Тип товару</div>
              <div className={styles.itemValue}>{activeProductDescription?.typeName}</div>
            </div>
            <div className={styles.itemNotChangeBlock}>
              <div className={styles.itemName}>Виробник</div>
              <div className={styles.itemValue}>{activeProductDescription?.brandName}</div>
            </div>
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

export default ProductPage;
