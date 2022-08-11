import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUser{
    user: any
  }
  
  const initialState:IUser = { user: false } 
  
  const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
      },
    
  })
  
  export const { } = counterSlice.actions
  export default counterSlice.reducer