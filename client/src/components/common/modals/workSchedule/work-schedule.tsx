import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./work-schedule.module.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function WorkScheduleModal({ closeHandler }: any) {
 
  return (
    <div className={styles.container}>
      <div className={styles.buttonBlock}>
        <button
          className={styles.button}
          name="schedule"
          onClick={(event) => closeHandler(event)}
        >
          <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
        </button>
      </div>

      <div className={styles.table}>
        <div className={styles.columDays}>
          <div className={styles.rowsTitle}> День</div>
          <div className={styles.rows}>Понеділок</div>
          <div className={styles.rows}>Вівторок</div>
          <div className={styles.rows}>Середа</div>
          <div className={styles.rows}>Четвер</div>
          <div className={styles.rows}>Пʼятниця</div>
          <div className={styles.rows}>Субота</div>
          <div className={styles.rows}>Неділя</div>
        </div>
        <div className={styles.columHours}>
          <div className={styles.rowsTitle}> Години роботи</div>
          <div className={styles.rows}>10:00 - 18:00</div>
          <div className={styles.rows}>10:00 - 18:00</div>
          <div className={styles.rows}>10:00 - 18:00</div>
          <div className={styles.rows}>10:00 - 18:00</div>
          <div className={styles.rows}>10:00 - 18:00</div>
          <div className={styles.rows}>Вихідний</div>
          <div className={styles.rows}>Вихідний</div>
        </div>
      </div>
    </div>
  );
}

export default WorkScheduleModal;
