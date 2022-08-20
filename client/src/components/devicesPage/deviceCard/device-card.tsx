import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../../store/hooks";
import { RoutePath } from "../../routes/enums";
import styles from "./devices-card.module.scss";
interface ISubCardProps {
  deviceImg1: string | undefined;
  deviceName: string;
  deviceId: number;
  subCategoryId: number;
  availability: number;
  price: number;
}

function DeviceCard({
  deviceImg1,
  deviceName,
  deviceId,
  subCategoryId,
  availability,
  price,
}: ISubCardProps) {
  const imgUrl = deviceImg1
    ? process.env.REACT_APP_API_URL + deviceImg1
    : process.env.PUBLIC_URL + "/noPhoto.jpg";
  const usdExchangeRate=42;
  const actualPrice=price* usdExchangeRate; 
  //const devices = useAppSelector((state) => state.device.devices);
  return (
    <div className={styles.deviceCard}>
      <div className={styles.content}>
        <Link to={RoutePath.DEVICE + deviceId} className={styles.link}>
          <img className={styles.img} src={imgUrl} alt="noPhoto " />
        </Link>
        <div className={styles.deviceInfo}>
          <div className={styles.name}>{deviceName}</div>
          <div >
            {availability?
            <div className={styles.availability}>Є в наявності</div>
            :<div className={styles.noavailability}> Нажаль товар закінчився</div>
        
    }</div>
          <div className={styles.price}>{actualPrice} грн</div>
          <button className={styles.button}>
            <FontAwesomeIcon
              className={styles.buttonIcon}
              icon={faCartShopping}
            />
            <div className={styles.buttonName}>Купити</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeviceCard;
