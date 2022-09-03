import React from "react";

import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { RoutePath } from "../../routes/enums";
import styles from "./devices-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../store/hooks";
import { imgUrlWraper } from "../../../services/helpers/img-helpers";
interface ISubCardProps {
  deviceImgArr?: string;
  deviceName: string;
  deviceId: number;
  subCategoryId: number;
  availability: number;
  price: string;
  onBuyDeviceHandler: any;
}

function DeviceCard({
  deviceImgArr,
  deviceName,
  deviceId,
  subCategoryId,
  availability,
  price,
  onBuyDeviceHandler,
}: ISubCardProps) {
  const actualDeviceImgArr = deviceImgArr?.split(",");
  const actualDeviceImg = actualDeviceImgArr?.[0];
  const imgUrl = imgUrlWraper(actualDeviceImg);

  const usdExchangeRate = useAppSelector(
    (state) => state.basket.usdExchangeRate
  );
  const actualPrice = Number(price) * usdExchangeRate;
  const buyDeviceHandler = () => {
    onBuyDeviceHandler({
      id: deviceId,
      img1: actualDeviceImg,
      name: deviceName,
      price,
      quantity: 1,
    });
  };
  return (
    <div className={styles.deviceCard}>
      <div className={styles.content}>
        <div className={styles.deviceImgBlock}>
          <Link to={RoutePath.DEVICE + deviceId} className={styles.link}>
            <img className={styles.img} src={imgUrl} alt="noPhoto " />
          </Link>
        </div>

        <div className={styles.deviceInfo}>
          <div className={styles.name}>{deviceName}</div>
          <div>
            {availability ? (
              <div className={styles.availability}>Є в наявності</div>
            ) : (
              <div className={styles.noavailability}>
                Нажаль товар закінчився
              </div>
            )}
          </div>
          <div className={styles.price}>{actualPrice} грн</div>
          <button className={styles.button} onClick={buyDeviceHandler}>
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
