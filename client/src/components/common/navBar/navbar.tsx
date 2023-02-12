import React from "react";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { RoutePath } from "../../routes/enums";
import Menu from "../menu/menu";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setIsActiveBasket } from "../../../store/redusers/basketSlice/basket-slice";
import Basket from "../basket/basket";

function Navbar() {
  const dispatch = useAppDispatch();
  const isActiveBasket = useAppSelector((state) => state.basket.isActiveBasket);
  const sumProductInBasket = useAppSelector(
    (state) => state.basket.devices.length
  );
  const showBasketHandler = () => {
    dispatch(setIsActiveBasket(!isActiveBasket));
  };
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar__item item-menu">
          <div className="icon-menu-container">
            <FontAwesomeIcon className="icon-menu" icon={faBars} />
            <span>Меню</span>
          </div>
          <div className="popup-menu">
            <Menu />
          </div>
        </div>
        <div className="navbar-items">
          <div>
            <NavLink to={RoutePath.SHOP} className="navbar__item">
              Головна
            </NavLink>
          </div>
          <div>
            <NavLink to={RoutePath.PRODUCTS} className="navbar__item">
              Каталог товарів
            </NavLink>
          </div>
          <div>
            <NavLink to={RoutePath.ABOUTUS} className="navbar__item abaut-us">
              Про нас
            </NavLink>
          </div>
          <div>
            <NavLink to={RoutePath.CONTACTS} className="navbar__item contacts">
              Наші контакти
            </NavLink>
          </div>
        </div>
      </div>
      <div className="navbar-bascket-container">
        <button className="navbar-bascket" onClick={showBasketHandler}>
          <div className="navbar-bascket__name">Кошик</div>
          <FontAwesomeIcon
            className="navbar-bascket__icon"
            icon={faCartShopping}
          />
          <div className="sum-product-in-basket">{sumProductInBasket}</div>
        </button>
      </div>
      {isActiveBasket && (
        <div className="basket">
          <Basket />
        </div>
      )}
    </div>
  );
}

export default Navbar;
