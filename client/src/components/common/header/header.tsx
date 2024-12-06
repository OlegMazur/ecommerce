import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RoutePath } from "../../routes/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/pngwing.com.png";
import {
  faPhone,
  faAt,
  faCommentDots,
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { IDevice } from "../../../store/redusers/deviceSlice/deviceSlice";
import { userLogout } from "../../../store/redusers/authSlice/authSlice";
function Header() {
  const user = useAppSelector((state) => state.auth.user);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const dispatch = useAppDispatch();
  const hasUser = Boolean(user);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const changeQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };
  const searchDevices = (arr: IDevice[]) => {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  const foundDevices = searchDevices(devices);
  const logoutHandler = () => {
    dispatch(userLogout());
  };
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo__text">Bike shop</div>
        
      </div>
      <div className="header-search">
        <div className="searchDevicesList">
          {Boolean(searchQuery) &&
            isFocus &&
            foundDevices.map(
              (item, index) =>
                index < 6 && (
                  <div key={index} className="searchDeviceItem">
                    <Link
                      to={RoutePath.DEVICE + item.id}
                      className="itemLink"
                      onClick={() => setIsFocus(!isFocus)}
                      //onBlur={() => setIsFocus(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                )
            )}
        </div>
        <input
          autoFocus={true}
          onChange={(e) => changeQueryHandler(e)}
          //onClick={()=>setIsFocus(!isFocus)}

          onFocus={() => setIsFocus(true)}
          name="search"
          className="header-search__input"
          placeholder="Пошук"
        ></input>
        <button className="header-search__button" type={"button"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="contacts-items">
        <div className="contacts-item ">
          <FontAwesomeIcon className="contacts-item__icon" icon={faPhone} />
          <div className="contacts-item__text phone">+38 093 531-04-75 </div>
        </div>
        <div className="contacts-item ">
          <FontAwesomeIcon className="contacts-item__icon" icon={faAt} />
          <div className="contacts-item__text message">
            написати повідомлення{" "}
          </div>
        </div>
        <div className="contacts-item ">
          <FontAwesomeIcon
            className="contacts-item__icon"
            icon={faCommentDots}
          />
          <div className="contacts-item__text response ">залишити відгук </div>
        </div>
        <div className="contacts-item schedule">
          <FontAwesomeIcon
            className="contacts-item__icon"
            icon={faCalendarDays}
          />
          <div className="contacts-item__text table-container">
            <div className="table">
              <div className="columDays">
                <div className="rowsTitle"> День</div>
                <div className="rows">Понеділок</div>
                <div className="rows">Вівторок</div>
                <div className="rows">Середа</div>
                <div className="rows">Четвер</div>
                <div className="rows">Пʼятниця</div>
                <div className="rows">Субота</div>
                <div className="rows">Неділя</div>
              </div>
              <div className="columHours">
                <div className="rowsTitle"> Години роботи</div>
                <div className="rows">10:00 - 18:00</div>
                <div className="rows">10:00 - 18:00</div>
                <div className="rows">10:00 - 18:00</div>
                <div className="rows">10:00 - 18:00</div>
                <div className="rows">10:00 - 18:00</div>
                <div className="rows">Вихідний</div>
                <div className="rows">Вихідний</div>
              </div>
            </div>
            графік роботи{" "}
          </div>
        </div>
      </div>
      {user?.role === "ADMIN" && (
        <button className="btn-admin">
          <NavLink to={RoutePath.ADMIN} className="btn-admin__link">
            Адмін панель
          </NavLink>
        </button>
      )}
      {hasUser ? (
        <button className="button-in-out" onClick={logoutHandler}>
          <NavLink to={RoutePath.SHOP} className="button-link">
            Вийти
          </NavLink>
        </button>
      ) : (
        <button className="button-in-out">
          <NavLink to={RoutePath.LOGIN} className="button-link">
            Увійти
          </NavLink>
        </button>
      )}
    </div>
  );
}

export default Header;
