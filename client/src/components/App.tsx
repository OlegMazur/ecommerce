import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./auth/auth";
import Footer from "./common/footer/footer";
import Header from "./common/header/header";
import Navbar from "./common/navBar/navbar";
import { PrivateRoute } from "./common/privateRoute/privateRoute";
import { RoutePath } from "./routes/enums";
import Shop from "./shop/shop";
import "./app.scss";
import { useAppDispatch } from "../store/hooks";
import { getCurrentUser } from "../store/redusers/authSlice/authSlice";
import CategoryPage from "./categoryPage/category-page";
import Basket from "./common/basket/basket";
import DevicePage from "./devicePage/device-page";
import SubCategoryPage from "./devicesPage/sub-category-page";
import {
  getAllCategory,
  getAllDevicesTitle,
  getAllSubCategory,
} from "../store/redusers/deviceSlice/deviceSlice";
import AboutUs from "./aboutUsPage/about-us";
import ContactsPage from "./contactsPage/contacts-page";

const App: React.FunctionComponent = () => {
  const hasToken = Boolean(localStorage.getItem("token"));
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (hasToken) {
      dispatch(getCurrentUser());
    }
  }, []);
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllSubCategory());
    dispatch(getAllDevicesTitle({ title: "title" }));
  }, []);

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
            path={RoutePath.ADMIN}
            element={<PrivateRoute component={Admin} />}
          />
          <Route
            path={RoutePath.BASKET}
            element={<PrivateRoute component={Basket} />}
          />
          <Route path={RoutePath.CONTACTS} element={<ContactsPage />} />
          <Route path={RoutePath.ABOUTUS} element={<AboutUs />} />
          <Route path={RoutePath.DEVICE_ID} element={<DevicePage />} />
          <Route
            path={RoutePath.SUB_CATEGORY_ID}
            element={<SubCategoryPage />}
          />
          <Route path={RoutePath.LOGIN} element={<Auth />} />
          <Route path={RoutePath.REGISTRATION} element={<Auth />} />
          <Route path={RoutePath.CATEGORY_PAGE_ID} element={<CategoryPage />} />
          <Route path={RoutePath.PRODUCTS} element={<Shop />} />
          <Route path={RoutePath.SHOP} element={<Shop />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
