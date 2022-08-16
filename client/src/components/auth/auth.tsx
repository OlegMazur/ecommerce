import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch} from "../../store/hooks";
import { userLogin, userRegistration } from "../../store/redusers/authSlice/authSlice";
import { Path } from "../routes/enums";
import "./auth.scss";
interface IFormInput {
  email: string;
  password: string;
}

function Auth() {
  let location = useLocation();
  const isLogin = location.pathname === Path.LOGIN;
  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  // const email = useAppSelector(state=>state.auth.user.email);
  // console.log(email)
  // const [email, setEmail]=useState(' ');
  // const [password, setPassword]=useState(' ');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  // const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  // const onSubmit = data => console.log(data);
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email, password } = data;
   
    if (isLogin) {
      const data = await dispatch(userLogin({ email, password })) ;
      if(data){
        navigate(Path.SHOP)
     };
    } else {
      const data = await dispatch(userRegistration( { email, password }) );
      
      if(data){
         navigate(Path.SHOP)
      };
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Авторизація" : "Реєстрація"}</h2>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-block">
          <input
            {...register("email", {
              required: "Це поле обовязкове",
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            })}
            placeholder="email"
          />
          <span>{errors.email?.message}</span>
          <span>{errors.email?.type==='pattern'&&'невірний формат ел. пошти'}</span>
        </div>
        <div className="input-block">
          <input
            {...register("password", {
              required: "Це поле обовязкове",
              minLength: { value: 6, message: "мінімальна довжина 8 символів" },
            })}
            placeholder="введіть пароль"
            type='password'
          />
          <span>{errors.password?.message}</span>
        </div>

        <div className="auth-buttons">
          <div>
            {isLogin ? (
              <div>
                немаєте акаунту?
                <Link to={Path.REGISTRATION}>Зареєструватися</Link>
              </div>
            ) : (
              <div>
                Вже маєте акаунт?<Link to={Path.LOGIN}>Увійти</Link>
              </div>
            )}
          </div>
          <button type="submit">
            {isLogin ? "Увійти" : "Зареєструватися"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
