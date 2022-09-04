import React from "react";

import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { RoutePath } from "../../routes/enums";
import styles from "./devices-card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../store/hooks";
import { imgUrlWraper } from "../../../services/helpers/img-helpers";
import { String } from "aws-sdk/clients/cloudtrail";
import { exchangeUsd } from "../../../services/helpers/exchange-helpers";
interface ISubCardProps {
  deviceImgArr?: string;
  deviceName: string;
  deviceId: number;
  subCategoryId: number;
  availability: number;
  price: string;
  onBuyDeviceHandler: any;
  currency?:String

}

function DeviceCard({
  deviceImgArr,
  deviceName,
  deviceId,
  subCategoryId,
  availability,
  price,
  onBuyDeviceHandler,
  currency
}: ISubCardProps) {
  const actualDeviceImgArr = deviceImgArr?.split(",");
  const actualDeviceImg = actualDeviceImgArr?.[0];
  const imgUrl = imgUrlWraper(actualDeviceImg);

  const usdRate = useAppSelector(
    (state) => state.basket.usdExchangeRate
  );
  const actualPrice = currency==="UAH"?price:exchangeUsd({usdRate ,price})
  
  const buyDeviceHandler = () => {
    onBuyDeviceHandler({
      id: deviceId,
      img1: actualDeviceImg,
      name: deviceName,
      price:actualPrice,
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

        <div className={styles.deviceInfoBlock}>
          <div className={styles.name}><span>{deviceName.length>100?deviceName.slice(0,100)+"...":deviceName}</span></div>
          <div className={styles.deviceInfo}>
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
    </div>
  );
}

export default DeviceCard;
