import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { Path } from "../../routes/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/pngwing.com.png";
import {
  faPhone,
  faAt,
  faCommentDots,
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
//import { Icon } from '../common';
import "./header.scss";
function Header() {
  const user = useAppSelector((state) => state.auth.user);
  const hasUser = Boolean(user);

  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo__text">Customlight</div>
        <img src={logo} alt="logo" className="header-logo__img" />
      </div>
      <div className="header-search">
        <input className="header-search__input" placeholder="Пошук"></input>
        <button className="header-search__button" type={"button"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="contacts-items">
        <div className="contacts-item">
          <FontAwesomeIcon className="contacts-item__icon" icon={faPhone} />
          <div className="contacts-item__text">+38 093 531-04-75 </div>
        </div>
        <div className="contacts-item">
          <FontAwesomeIcon className="contacts-item__icon" icon={faAt} />
          <div className="contacts-item__text">написати повідомлення </div>
        </div>
        <div className="contacts-item">
          <FontAwesomeIcon
            className="contacts-item__icon"
            icon={faCommentDots}
          />
          <div className="contacts-item__text">залишити відгук </div>
        </div>
        <div className="contacts-item">
          <FontAwesomeIcon
            className="contacts-item__icon"
            icon={faCalendarDays}
          />
          <div className="contacts-item__text">графік роботи </div>
        </div>
      </div>
      {hasUser ? (
        <div className="button-in-out">
          <NavLink to={Path.LOGIN} className="button-link">
            {" "}
            Вийти{" "}
          </NavLink>
        </div>
      ) : (
        <div className="button-in-out">
          <NavLink to={Path.SHOP} className="button-link">
            {" "}
            Увійти
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
