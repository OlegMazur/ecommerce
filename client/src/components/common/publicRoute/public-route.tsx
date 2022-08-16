import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { Path } from "../../routes/enums";
interface IProp{
    component:React.FC,
    
}
const PublicRoute = ({ component: Component, ...rest }:IProp) => {
    const { user } = useAppSelector(state => ({
      user: state.auth.user
    }));
  
    const hasUser = Boolean(user);
  
    return hasUser
      ? <Navigate to={{ pathname: Path.SHOP,  }} />
      : <Component {...rest} />;
  };
  export { PublicRoute };