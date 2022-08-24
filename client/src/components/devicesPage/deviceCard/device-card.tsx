
import React from "react";

import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { RoutePath } from "../../routes/enums";
import styles from "./devices-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ISubCardProps {
  deviceImg1?: string ;
  deviceName: string;
  deviceId: number;
  subCategoryId: number;
  availability: number;
  price: number;
  onBuyDeviceHandler:any
 
}

function DeviceCard({
  deviceImg1,
  deviceName,
  deviceId,
  subCategoryId,
  availability,
  price,
  onBuyDeviceHandler
}: ISubCardProps) {
  const imgUrl = deviceImg1
    ? process.env.REACT_APP_API_URL + deviceImg1
    : process.env.PUBLIC_URL + "/noPhoto.jpg";
  const usdExchangeRate=42;
  //const [basketDeviceId]=useId();
  const actualPrice=price* usdExchangeRate; 
 
 
  const buyDeviceHandler=()=>{
    onBuyDeviceHandler({id:deviceId,img1:deviceImg1,name:deviceName,price,quantity:1})
  }
  
  
  return (
    <div className={styles.deviceCard}>
      <div className={styles.content}>
        <Link to={RoutePath.DEVICE + deviceId} className={styles.link}>
          <img className={styles.img} src={imgUrl} alt="noPhoto " />
        </Link>
        <div className={styles.deviceInfo}>
          <div className={styles.name}>{deviceName}</div>
          <div >
            {
            availability
            ?<div className={styles.availability}>
                Є в наявності
             </div>
            :<div className={styles.noavailability}> 
            Нажаль товар закінчився
            </div>
        }
        </div>
        <div className={styles.price}>{actualPrice} грн</div>
          <button className={styles.button} onClick={buyDeviceHandler}>
            <FontAwesomeIcon
              className={styles.buttonIcon}
              icon={faCartShopping}
            />
            <div className={styles.buttonName} >Купити</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
