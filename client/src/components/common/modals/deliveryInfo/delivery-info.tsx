import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './delivery-info.module.scss';
import {faXmark } from "@fortawesome/free-solid-svg-icons";
function DeliveryInfoModal({closeHandler}:any) {
    const closeHandlerType=()=>{
        closeHandler('delivery')
    } 
    return (
    <div className={styles.container}>
        <div  className={styles.buttonBlock} >
            <button className={styles.button} onClick={closeHandlerType}>
             <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
        </button>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Тедефон:</span>
            <span className={styles.itemContent}>+38 (093) 531-04-75 </span>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Контактна особа:</span>
            <span className={styles.itemContent}>Сергій</span>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Адреса:</span>
            <span className={styles.itemContent}>Львів, Україна</span>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Email:</span>
            <span className={styles.itemContent}>aukroman.one@gmail.com</span>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Telegram:</span>
            <span className={styles.itemContent}>+38 (093) 531-04-75</span>
        </div>
        <div className={styles.item}>
            <span className={styles.itemName}>Viber:</span>
            <span className={styles.itemContent}>+38 (093) 531-04-75</span>
        </div>
    </div>
  )
}

export default DeliveryInfoModal