import { check, registration } from './../../../services/http/auth/auth';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IUser{
    email: string|null,
    password: string|null,
    role?: string|null
   
  }
  interface IInitialState{
    user:IUser
  }
  interface Idata{
    id:number,
    email:string,
    role:string
  }
  const initialState:IInitialState= {user:{email:null, password:null,role:null}}  
  export const userRegistration= createAsyncThunk<Idata,IUser,{rejectValue:string}>(
    'user/registration',
    async function (payload,{rejectWithValue}) {
      let idata;
       await registration(payload).then(data=>idata=data)
      
      // if(data){
      //   idata=data
      // }
       
      if(!idata){
        return rejectWithValue('server Error')
      }
      
        console.log(idata)
        return idata
      
      
    }
  )
  export const getCurrentUser= createAsyncThunk<Idata,undefined, { rejectValue:string, state:{user:IUser}}>(
    'user/getCurrentUser',
    async function (_,{rejectWithValue,getState}) {
      const user=getState().user;
      let idata;
     
       await check(user).then(data=>idata=data)
      
      // if(data){
      //   idata=data
      // }
       
      if(!idata){
        return rejectWithValue('server Error')
      }
      
        console.log(idata)
        return idata
      
      
    }
  )
  const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
      },
      extraReducers:(builder)=>{
        builder
        .addCase(userRegistration.fulfilled,(state,action)=>{
          state.user.email=action.payload.email
         
        })
        .addCase(getCurrentUser.fulfilled,(state,action)=>{
          state.user.email=action.payload.email
         
        })
      }
    
  })
  
 // export const { } = counterSlice.actions
  export default counterSlice.reducer