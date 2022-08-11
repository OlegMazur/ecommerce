import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./auth/auth";
import Basket from "./basket/basket";
import Header from "./common/header/header";
import { PrivateRoute } from "./common/privateRoute/privateRoute";
import Device from "./device/device";
import { Path } from "./routes/enums";
import { authRoutes } from "./routes/routes";
import Shop from "./shop/shop";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
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
    </div>
  );
};

export default App;
