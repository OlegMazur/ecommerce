import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./auth/auth";

import Footer from "./common/footer/footer";
import Header from "./common/header/header";
import Navbar from "./common/navBar/navbar";
import { PrivateRoute } from "./common/privateRoute/privateRoute";
import Device from "./devicePage/device-page";
import { Path, RoutePath } from "./routes/enums";
import Shop from "./shop/shop";
import "./app.scss";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCurrentUser } from "../store/redusers/authSlice/authSlice";
import CategoryPage from "./categoryPage/category-page";
import DevicesPage from "./devicesPage/devices-page";
import Basket from "./common/basket/basket";
const App: React.FunctionComponent = () => {
  console.log("dispatch get currUser");
  //const user =useAppSelector(state=>state.auth.user);
  //const[loading, setLoading]= useState(true);
  const isActiveBasket=useAppSelector(state=>state.basket.isActiveBasket)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
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
          <Route path={RoutePath.DEVICE_ID} element={<Device />} />
          <Route path={RoutePath.DEVICES_ID} element={<DevicesPage />} />
          <Route path={Path.LOGIN} element={<Auth />} />
          <Route path={Path.REGISTRATION} element={<Auth />} />
          <Route path={RoutePath.CATEGORY_PAGE_ID} element={<CategoryPage />} />
          <Route path={Path.SHOP} element={<Shop />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
