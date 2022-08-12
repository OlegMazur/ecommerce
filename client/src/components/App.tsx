import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./auth/auth";
import Basket from "./basket/basket";
import Footer from "./common/footer/footer";
import Header from "./common/header/header";
import Navbar from "./common/navBar/navbar";
import { PrivateRoute } from "./common/privateRoute/privateRoute";
import Device from "./device/device";
import { Path } from "./routes/enums";
import { authRoutes } from "./routes/routes";
import Shop from "./shop/shop";
import './app.scss'
const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <nav>
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
          <Route path={Path.DEVICE} element={<Device />} />
          <Route path={Path.LOGIN} element={<Auth />} />
          <Route path={Path.REGISTRATION} element={<Auth />} />
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
