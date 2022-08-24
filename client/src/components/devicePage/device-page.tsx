import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./device-page.module.scss";
import { getDeviceById } from "../../store/redusers/deviceSlice/deviceSlice";
import {
  addDeviceInBasket,
  setIsActiveBasket,
} from "../../store/redusers/basketSlice/basket-slice";
import Img from "../common/Img/img";
import { exchangeUsd } from "../../services/helpers/exchange-helpers";
import ContactInfoModal from "../common/modals/contactInfoModals/contact-info";
import DeliveryInfoModal from "../common/modals/deliveryInfo/delivery-info";
import WorkScheduleModal from "../common/modals/workSchedule/work-schedule";
import WarrantyInfoModal from "../common/modals/warrantyInfo/warranty-info";
import ModalsWraper from "../common/modals/modalsWraper/modals-wraper";

function DevicePage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [isContactClose, setIsContactClose] = useState(true);
  const [isDeliveryClose, setIsDeliveryClose] = useState(true);
  const [isWorkScheduleClose, setIsWorkScheduleClose] = useState(true);
  const [isWorrantyClose, setIsWorrantyClose] = useState(true);
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const categorys = useAppSelector((state) => state.device.categories);
  const usdExchangeRate = useAppSelector(
    (state) => state.basket.usdExchangeRate
  );
  const selectedSubCategory = subCategories.find(
    (item) => item.id === Number(id)
  );
  const category = categorys.find(
    (item) => item.id === selectedSubCategory?.categoryId
  );
  const actualDevice = devices.find((item) => item.id === Number(id));

  const buyDeviceHandler = () => {
    dispatch(setIsActiveBasket(true));
    if (actualDevice) {
      dispatch(addDeviceInBasket({
        id:actualDevice.id,
        name:actualDevice.name,
        price:actualDevice.price,
        img1:actualDevice.img1,
        quantity:1   }));
    }
  };
  console.log("actualDevice");
  console.log(actualDevice);
  console.log("devices");
  console.log(devices);

  const priceUah = actualDevice?.price
    ? Math.ceil(usdExchangeRate * actualDevice?.price)
    : 0;
  const closeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    const currentTarget: HTMLButtonElement = event?.currentTarget;
    console.log(currentTarget.name);
    switch (currentTarget.name) {
      case "contact": {
        setIsContactClose(!isContactClose);
        break;
      }
      case "delivery": {
        setIsDeliveryClose(!isDeliveryClose);
        break;
      }
      case "schedule": {
        setIsWorkScheduleClose(!isWorkScheduleClose);
        break;
      }
      case "warranty": {
        setIsWorrantyClose(!isWorrantyClose);
        break;
      }
    }
  };
  const outContentClick = () => {
    setIsContactClose(true);
    setIsDeliveryClose(true);
    setIsWorkScheduleClose(true);
    setIsWorrantyClose(true);
  };
  const str =
    '<p>Світлодіод: samsung LH351D<br />\nЯскравість1300lm<br />\nЖивлення від одного акумулятора 18650 (в комплект не входить)<br />\nЗаряд від USB-C,<br />\nМагніт в хвості ліхтаря<br />\n<br />\nВ комплекті:<br />\nЛіхтар<br />\nКабель для зарядки<br />\nШнурок на зап&#39;ястя<br />\nЗапасні О-рінги<br />\nКерівництво з&nbsp; використання<br />\n<br />\n<br />\nВага: 65грам<br />\nРозмір 116мм*27мм</p>\n\n<p>Дві групи режимів: 6 ступенів яскравості і плавне регулювання.<br />\n<br />\n<img alt="" src="https://images.ua.prom.st/3204366075_w640_h2048_znimok_ekrana_2021_07_06_153932.jpg?fresh=1&amp;PIMAGE_ID=3204366075" style="width: 640px; height: 329px;" /></p>\n';
  useEffect(() => {
    
      if(!Boolean(actualDevice?.info)){
        dispatch(getDeviceById(Number(id)))};
  }, []);
  return (
    <div className={styles.card}>
      <div className={styles.navHistory}>
        <div className={styles.navHome}>
          <NavLink to={RoutePath.SHOP} className={styles.navLinkHome}>
            <FontAwesomeIcon icon={faHouse} />
            <div>Головна </div>
          </NavLink>
          <span>/</span>
          <NavLink
            to={RoutePath.CATEGORY_PAGE + category?.id}
            className={styles.navLinkCategory}
          >
            {category?.title}
          </NavLink>
          <span>/</span>
          <NavLink
            to={RoutePath.SUB_CATEGORY + actualDevice?.subCategoryId}
            className={styles.navLinkCategory}
          >
            {category?.title}
          </NavLink>
          <span>/</span>
        </div>
        <div className={styles.selectedCategory}>{actualDevice?.name}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainBlock}>
          <div className={styles.imgBlock}>
            <div className={styles.smallImgBlock}>
              <Img url={actualDevice?.img2} deviceClass={styles.img} />
              <Img url={actualDevice?.img3} deviceClass={styles.img} />
              <Img url={actualDevice?.img4} deviceClass={styles.img} />
            </div>
            <Img url={actualDevice?.img1} deviceClass={styles.img1} />
          </div>
          <div className={styles.orderBlock}>
            <div className={styles.nameBlock}>
              <span>{actualDevice?.name}</span>
            </div>
            <div className={styles.availabilityBlock}>
              <div>
                {actualDevice?.availability ? (
                  <div className={styles.availability}>Є в наявності</div>
                ) : (
                  <div className={styles.noavailability}>
                    Нажаль товар закінчився
                  </div>
                )}
              </div>
            </div>
            <div className={styles.priceBlock}>
              <span>{priceUah} грн</span>
            </div>
            <div className={styles.colorBlock}>
              <span>колір</span>
            </div>
            <div className={styles.buttonBlock}>
              <button className={styles.button} onClick={buyDeviceHandler}>
                <FontAwesomeIcon
                  className={styles.faCartShopping}
                  icon={faCartShopping}
                />
                <span>Купити</span>
              </button>
            </div>
            <div className={styles.contactsBlock}>
              <div className={styles.buttonsBlock}>
                <button
                  name="delivery"
                  onClick={(event) => closeHandler(event)}
                >
                  Умови оплати та доставки
                </button>
                <button
                  name="schedule"
                  onClick={(event) => closeHandler(event)}
                >
                  Графік роботи
                </button>
                <button name="contact" onClick={(event) => closeHandler(event)}>
                  Адреса та контакти
                </button>
              </div>
              <div className={styles.contactsContent}>
                <div>Умови повернення:</div>
                <div>Повернення товару протягом 14 днів за домовленістю </div>
                <button
                  name="warranty"
                  onClick={(event) => closeHandler(event)}
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <h3 className={styles.title}>Характеристики товару</h3>
          <div
            className="Container"
            dangerouslySetInnerHTML={{
              __html: actualDevice?.info
                ? actualDevice?.info[0].description
                : "немає інформації",
            }}
          ></div>
        </div>
      </div>
      <ModalsWraper
        component={ContactInfoModal}
        outContentClick={outContentClick}
        isClose={isContactClose}
        closeHandler={closeHandler}
      />
      <ModalsWraper
        component={DeliveryInfoModal}
        outContentClick={outContentClick}
        isClose={isDeliveryClose}
        closeHandler={closeHandler}
      />
      <ModalsWraper
        component={WorkScheduleModal}
        outContentClick={outContentClick}
        isClose={isWorkScheduleClose}
        closeHandler={closeHandler}
      />
      <ModalsWraper
        component={WarrantyInfoModal}
        outContentClick={outContentClick}
        isClose={isWorrantyClose}
        closeHandler={closeHandler}
      />
    </div>
  );
}

export default DevicePage;