import React, { useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./auth/auth";
import Basket from "./basket/basket";
import Footer from "./common/footer/footer";
import Header from "./common/header/header";
import Navbar from "./common/navBar/navbar";
import { PrivateRoute } from "./common/privateRoute/privateRoute";
import Device from "./device/device";
import { Path, RoutePath } from "./routes/enums";
import Shop from "./shop/shop";
import './app.scss'
import { useAppDispatch } from "../store/hooks";
import { getCurrentUser } from "../store/redusers/authSlice/authSlice";
import CategoryPage from "./categoryPage/category-page";
const App: React.FunctionComponent = () => {
  console.log("dispatch get currUser")
  //const user =useAppSelector(state=>state.auth.user);
  //const[loading, setLoading]= useState(true);
  const dispatch= useAppDispatch();
  useEffect(()=>{
     dispatch(getCurrentUser())
     

  },[ dispatch])
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <nav className="nav">
        <Navbar />
      </nav>
      <main className="main">
        <Routes>
          <Route
            path={Path.ADMIN}
            element={<PrivateRoute component={Admin} />}
          />
          <Route
            path={Path.BASKET}
            element={<PrivateRoute component={Basket} />}
          />
          <Route path={RoutePath.DEVICE} element={<Device />} />
          <Route path={Path.LOGIN} element={<Auth />} />
          <Route path={Path.REGISTRATION} element={<Auth />} />
          <Route 
          path={RoutePath.CATEGORY_PAGE} element={<CategoryPage />} 
          />
          <Route 
          path={Path.SHOP} element={<Shop />} 
          />

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
