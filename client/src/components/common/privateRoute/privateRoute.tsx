import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { Path } from "../../routes/enums";
interface IProp {
  component: React.FC;
}
const PrivateRoute = ({ component: Component, ...rest }: IProp) => {
  const { user } = useAppSelector((state) => ({
    user: state.auth.user,
  }));
  const hasUser = Boolean(user);
  return hasUser ? (
    <Component {...rest} />
  ) : (
    <Navigate to={{ pathname: Path.SHOP }} />
  );
};
export { PrivateRoute };
