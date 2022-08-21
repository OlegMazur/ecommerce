import { IDevice } from './../deviceSlice/deviceSlice';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
interface IInitialState{
    devices:IDevice[],
    isActiveBasket:boolean,
    usdExchangeRate:number
}
const initialState:IInitialState={
    devices:[],
    isActiveBasket:false,
    usdExchangeRate:40.7

}
const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setIsActiveBasket(state,action:PayloadAction<boolean>){
            state.isActiveBasket=action.payload
        },
        addDeviceInBasket(state,action:PayloadAction<IDevice>){
          const result=state.devices.find((device)=>device.id===action.payload.id)  
          if(!result){
            state.devices.push(action.payload)
          } 
         
        },
        removeBasketDevice(state,action:PayloadAction<{id:number}>){
            console.log(action.payload)
            state.devices=state.devices.filter(({id})=>id!==action.payload.id)
        }
     
    },
    
  })
  
  export const { setIsActiveBasket,addDeviceInBasket,removeBasketDevice} = basketSlice.actions
  export default basketSlice.reducer