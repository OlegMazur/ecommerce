import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./delivery-info.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function DeliveryInfoModal({ closeHandler }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBlock}>
        <button
          className={styles.button}
          name="delivery"
          onClick={(event) => closeHandler(event)}
        >
          <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Способи доставки:</div>
        <ul>
          <li>Доставка "Нова Пошта"</li>
          <li>Доставка "Укрпошта"</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.itemName}>Способи оплати:</div>
        <ul>
          <li>Післяплата Укрпоштою</li>
          <li>оплата на картку МоноБанку</li>
          <li>Післяплата "Нова Пошта"</li>
          <li>
            <div className={styles.title}> Оплата за реквізитами</div>
            <div>Передзвоніть для уточнення деталей</div>
          </li>
        </ul>
      </div>
    
    </div>
  );
}

export default DeliveryInfoModal;
