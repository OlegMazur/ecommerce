import React from "react";
import { NavLink } from "react-router-dom";
import { Path, RoutePath } from "../../routes/enums";
import "./menu.scss";

const Menu: React.FC = () => {
  return (
    <div className="menu-container">
     
      <div className="menu-item">
        <NavLink to={RoutePath.PRODUCTS} className="menu-item__link">
          Каталог товарів
        </NavLink>
      </div>
      {/* <div className="menu-item">
        <NavLink to={Path.BASKET} className="menu-item__link">
          Кошик
        </NavLink>
      </div> */}
      <div className="menu-item">
        <NavLink to={RoutePath.ABOUTUS} className="menu-item__link">
          Про нас
        </NavLink>
      </div>
      <div className="menu-item">
        <NavLink to={RoutePath.CONTACTS} className="menu-item__link">
          Наші контакти
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
