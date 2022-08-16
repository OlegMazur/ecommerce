import { check, login, registration } from '../../../services/auth/auth';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface IUser{
    email: string|null,
    password: string|null,
    role?: string|null
   
  }
  interface IInitialState{
    user:Idata|null
  }
  interface Idata{
    id:number,
    email:string,
    role:string
  }
  const initialState:IInitialState= {user:null}  
  export const userRegistration= createAsyncThunk<Idata,IUser,{rejectValue:string}>(
    'user/registration',
    async function (payload,{rejectWithValue}) {
      let idata;
       await registration(payload).then(data=>idata=data)
       
      if(!idata){
        return rejectWithValue('server Error')
      }
      
        console.log(idata)
        return idata
      
      
    }
  )
  export const userLogin= createAsyncThunk<Idata,IUser,{rejectValue:string}>(
    'user/login',
    async function (payload,{rejectWithValue}) {
      let idata;
       await  login(payload).then(data=>idata=data)
       
      if(!idata){
        return rejectWithValue('server Error')
      }
      console.log("idata")
        console.log(idata)
        return idata
      
      
    }
  )
  export const getCurrentUser= createAsyncThunk<Idata,undefined, { rejectValue:string, }>(
    'user/getCurrentUser',
    async function (_,{rejectWithValue}) {
     //const user=getState().user;
      let idata;
     
       await check().then(data=>idata=data)
      
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
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      
      },
      extraReducers:(builder)=>{
        builder
        .addCase(userRegistration.fulfilled,(state,action)=>{
          state.user=action.payload
         
        })
        .addCase(userLogin.fulfilled,(state,action)=>{
          state.user=action.payload
         
        })
        .addCase(getCurrentUser.fulfilled,(state,action)=>{
          state.user=action.payload
         
        })
      }
    
  })
  
 // export const { } = counterSlice.actions
  export default userSlice.reducer