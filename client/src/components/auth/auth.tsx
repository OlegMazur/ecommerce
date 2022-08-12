import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Path } from "../routes/enums";
import "./auth.scss";
function Auth() {
    let location = useLocation();
    const isLogin=location.pathname===Path.LOGIN;
    console.log(location)
  return (
    <div className="auth-container">
      <h2>{isLogin?'Авторизація':'Реєстрація'}</h2>
      <form className="auth-form">
        <input placeholder="введіть email" />
        <input placeholder="введіть пароль" />
        <div className="auth-buttons">
          <div>
            {isLogin?
              <div>немаєте акаунту?<Link to={Path.REGISTRATION}>Зареєструватися</Link></div>
            :<div>Вже маєте акаунт?<Link to={Path.LOGIN}>Увійти</Link></div>
            }
          
            
          </div>
          <button>{isLogin?'Увійти':'Зареєструватися'}</button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
