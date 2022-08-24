import React, { useState } from "react";
import { imgUrlWraper } from "../../../../services/helpers/img-helpers";
import styles from "./basket-card.module.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { changeDeviceQuantity } from "../../../../store/redusers/basketSlice/basket-slice";
interface IDevice {
  id: number;
  img1?: string;
  name: string;
  price: number;
  onRemoveBasketDevice:any
}
function BasketCard({ id, img1, name, price ,onRemoveBasketDevice}: IDevice) {
  const img = imgUrlWraper(img1);
  const dispatch=useAppDispatch();
  const deviceQuantity=useAppSelector(state=>state.basket.devices.find(item=>item.id===id)?.quantity)as number;
  //const [deviceQuantity, setDeviceQuantity] = useState(1);
  const usdExchangeRate=useAppSelector(state=>state.basket.usdExchangeRate);
  const actualPrice:number=Math.ceil(usdExchangeRate*price);
  const removeDeviceHandler=()=>{
    onRemoveBasketDevice(id)
  }
  const increment = () => {
    //setDeviceQuantity(deviceQuantity + 1);
    dispatch(changeDeviceQuantity({id, quantity:deviceQuantity + 1}))
    
  };
  const decrement = () => {
    if (deviceQuantity === 0) {
      return;
    }
    dispatch(changeDeviceQuantity({id, quantity:deviceQuantity - 1}))
    //setDeviceQuantity(deviceQuantity - 1);
  };
  const totalPrice = deviceQuantity * actualPrice;
  return (
    <div className={styles.basketCard}>
      <div className={styles.imgBlock}>
        <img className={styles.img} src={img} alt="basketImg" />
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.deviceName}>{name}</div>
        <div className={styles.priceBlock}>
            <span>Ціна</span>
            <div className={styles.price}>{actualPrice}</div> 
            <span>грн/шт</span>
        </div>
        <div className={styles.deviceQuantityBlock}>
          <button className={styles.buttonPlus} onClick={decrement}>
            -
          </button>
          <button className={styles.deviceQuantity}>{deviceQuantity}</button>
          <button className={styles.buttonPlus} onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div className={styles.deleteBlock}>
         <button onClick={removeDeviceHandler} className={styles.deleteButton}>
            <FontAwesomeIcon  icon={ faTrashCan} className={styles.faTrashCan}/>
            </button>
        <div className={styles.totalPrice}><span>сума </span>{totalPrice} </div>
      </div>
    </div>
  );
}

export default BasketCard;
