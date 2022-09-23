import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./warranty-info.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function WarrantyInfoModal({ closeHandler }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonBlock}>
        <button
          className={styles.button}
          name="warranty"
          onClick={(event) => closeHandler(event)}
        >
          <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
        </button>
      </div>
      <div className={styles.block}>
        <div className={styles.itemTitle}> Умови повернення та обміну</div>
        <div className={styles.itemContent}>
          Компанія здійснює повернення та
        </div>
        <div className={styles.itemContent}>
          обмін цього товару відповідно до вимог законодавства.
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.itemTitle}>Терміни повернення</div>

        <div className={styles.itemContent}>
          Повернення можливе протягом 14 днів після отримання (для товарів
          належної якості).
        </div>
        <div className={styles.itemContent}>
          Зворотня доставка товарів здійснюєтьсяза домовленістю.
        </div>
        <div className={styles.itemContent}>
          Згідно з чинним законодавством ви можете повернути товар належної
          якості або обміняти його, у разі якщо:
        </div>
        <ul>
          <li>
            товар не був у вживанні і не має слідів використання споживачем:
            подряпин, сколів, потертостей, плям і т.п.;
          </li>
          <li>товар повністю укомплектований і збережена фабрична упаковка;</li>
          <li>збережені всі ярлики і заводське маркування;</li>
          <li>товар зберігає товарний вигляд і свої споживчі властивості.</li>
        </ul>
      </div>
    </div>
  );
}

export default WarrantyInfoModal;
