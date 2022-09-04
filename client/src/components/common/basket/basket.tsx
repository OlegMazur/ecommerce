import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  removeBasketDevice,
  setIsActiveBasket,
} from "../../../store/redusers/basketSlice/basket-slice";
import styles from "./basket.module.scss";
import BasketCard from "./basketCard/basket-card";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
function Basket() {
  const devices = useAppSelector((state) => state.basket.devices);
  //const isActiveBasket=useAppSelector(state=>state.basket.isActiveBasket);
  //const usdExchangeRate=useAppSelector((state) => state.basket.usdExchangeRate);
  const orderSum = devices.reduce((sum, current) => sum + current.price*current.quantity, 0);
  //const uahOrderSum=Math.round(usdExchangeRate*orderSum);
  const dispatch = useAppDispatch();
  const onRemoveBasketDevice = (id: number) => {
    dispatch(removeBasketDevice({ id }));
  };
  const closeBasketHandler = () => {
    dispatch(setIsActiveBasket(false));
  };
  return (
    <div className={styles.bascketContainer}>
      <header className={styles.header}>
        <button onClick={closeBasketHandler} className={styles.button}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.faAngleLeft} />
          <div className={styles.title}>Сховати кошик</div>
        </button>
        
      </header>
      <div className={styles.bascketCardContainer}>
        {devices.map(({ id, img1, name, price }) => (
          <BasketCard
            key={id}
            id={id}
            img1={img1}
            name={name}
            price={price}
            onRemoveBasketDevice={onRemoveBasketDevice}
          />
        ))}
      </div>
      <footer className={styles.footer}>
        <div className={styles.totalPriceBlock}>
          <div className={styles.title}>До оплати без доставки</div>  
          <div className={styles.price}>{orderSum} грн</div>
          
        </div>
        <button className={styles.button}>
            <span>Оформити замовлення</span>
        </button>
      </footer>
    </div>
  );
}

export default Basket;
