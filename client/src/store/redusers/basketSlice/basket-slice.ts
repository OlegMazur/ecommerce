import { IDevice } from "./../deviceSlice/deviceSlice";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IBasketDevice {
  id: number;
  name: string;
  price: number;
  img1: string|undefined;
  quantity:number
}
interface IInitialState {
  devices: IBasketDevice[];
  isActiveBasket: boolean;
  usdExchangeRate: number;
}
const initialState: IInitialState = {
  devices: [],
  isActiveBasket: false,
  usdExchangeRate: 40.7,
};
const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setIsActiveBasket(state, action: PayloadAction<boolean>) {
      state.isActiveBasket = action.payload;
    },
    addDeviceInBasket(state, action: PayloadAction<IBasketDevice>) {
      const result = state.devices.find(
        (device) => device.id === action.payload.id
      );
      if (!result) {
        state.devices.push(action.payload);
      }
    },
    changeDeviceQuantity(state, action: PayloadAction<{id:number,quantity:number}>) {
        // const result = state.devices.find(
        //   (device) => device.id === action.payload.id
        // );
        
          state.devices=state.devices.map(item=>item.id===action.payload.id?{...item, quantity:action.payload.quantity}:item);
        
      },
    removeBasketDevice(state, action: PayloadAction<{ id: number }>) {
      console.log(action.payload);
      state.devices = state.devices.filter(
        ({ id }) => id !== action.payload.id
      );
    },
  },
});

export const { setIsActiveBasket, addDeviceInBasket, removeBasketDevice,changeDeviceQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
