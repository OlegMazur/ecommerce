import React, { useState } from "react";
import { imgUrlWraper } from "../../../../services/helpers/img-helpers";
import styles from "./basket-card.module.scss";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface IDevice {
  id: number;
  img1?: string;
  name: string;
  price: number;
  onRemoveBasketDevice:any
}
function BasketCard({ id, img1, name, price ,onRemoveBasketDevice}: IDevice) {
  const img = imgUrlWraper(img1);
  const [deviceQuantity, setDeviceQuantity] = useState(1);
  const removeDeviceHandler=()=>{
    onRemoveBasketDevice(id)
  }
  const increment = () => {
    setDeviceQuantity(deviceQuantity + 1);
  };
  const decrement = () => {
    if (deviceQuantity === 0) {
      return;
    }
    setDeviceQuantity(deviceQuantity - 1);
  };
  const totalPrice = deviceQuantity * price;
  return (
    <div className={styles.basketCard}>
      <div className={styles.imgBlock}>
        <img className={styles.img} src={img} alt="basketImg" />
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.deviceName}>{name}</div>
        <div className={styles.priceBlock}>
            <span>Ціна</span>
            <div className={styles.price}>{price}</div> 
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
