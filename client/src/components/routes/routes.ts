import Admin from "../admin/admin";
import Auth from "../auth/auth";
import Basket from "../basket/basket";
import Device from "../device/device";
import Shop from "../shop/shop";
import { Path } from "./enums";

export const authRoutes=[
    {
        path: Path.ADMIN,
        Component: Admin
    },
    {
        path: Path.BASKET,
        Component: Basket
    },
]
  export const publicRoutes =[
    {
        path: Path.SHOP,
        Component: Shop
    },
    {
        path: Path.LOGIN,
        Component: Auth
    },
    {
        path: Path.REGISTRATION,
        Component: Auth
    },
    {
        path: Path.DEVICE + '/:id',
        Component: Device
    },
  ]


