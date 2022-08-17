
import { getDevices, getTypes, getBrands, getSubCategory, getCategory } from './../../../services/devicesService/device';
import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ActionType } from './common';

export interface IType {
    id: number,
    name: string,
    img:string,
    createdAt: string,
     updatedAt: string,
  }
  export interface ICategory {
    id: number,
    name: string,
    createdAt: string,
     updatedAt: string,
  } 
  export interface ISubCategory {
    id: number,
    name: string,
    createdAt: string,
     updatedAt: string,
  } 
  export interface IBrands {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
  } 
  export interface IDeviceInfo {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string,
    deviceId: number
  } 

  export interface IDevice {
    id: number,
    name: string,
    price:number,
    rating:number,
    img1:string,
    img2:string,
    img3:string,
    img4:string,
    createdAt?:string,
    updatedAt?:string,
    typeId: number,
    brandId: number,
    info: IDeviceInfo[]
   
    subCategoryId: number,
    searchQueries: string,
    currency: string,
    unit: string,
    availability: number,
    label: string,
    weight: number,
    height: number,
    length: number,
    location: string,
    
  } 
  export interface IDevices{
    
      count:number,
      rows:IDevice[],
     
  }
  // export interface IDevicesInfo{
  //   id:number,
  //   title:string,
  //   description:string
  // }
  interface IState{
    types:IType[],
    brands:IBrands[],
    categories:ICategory[],
    subCategories:ISubCategory[],
    devices:IDevices,
    error:string|null,
    loading:boolean

   
    //devicesInfo:IDevicesInfo[]
  }
  const initialState:IState ={
  //   {
  //     "id": 34,
  //     "name": "S2 1",
  //     "price": 1000,
  //     "reting": 0,
  //     "img": "5bec57e3-acf6-4265-bf86-e3f9aec93eee.jpg",
  //     "createdAt": "2022-08-15T15:20:54.010Z",
  //     "updatedAt": "2022-08-15T15:20:54.010Z",
  //     "typeId": 6,
  //     "brandId": 2,
  //     "info": [
  //         {
  //             "id": 1,
  //             "title": "S2",
  //             "description": "Живлення від одного акумулятора",
  //             "createdAt": "2022-08-15T15:20:54.144Z",
  //             "updatedAt": "2022-08-15T15:20:54.144Z",
  //             "deviceId": 34
  //         }
  //     ]
  // }
    types:[
        // {id:1,name:"Ліхатики",img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        // {id:2,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:3,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:4,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:5,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:6,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:7,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        // {id:8,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},

    ],
    brands:[
        // {id:1,name:"Convoy"},
        // {id:2,name:"Liitokala"}
    ],
    devices:{
      count:0,
      rows:[
        //  {id:1, name:'iphone',price:4232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:2, name:'iphone',price:4200,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:3, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:4, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:5, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:6, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        //     {id:7, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
         ]
    },
    categories:[],
    subCategories:[],
    loading:false,
    error:null
    //devicesInfo:[]

  }
  export const getAllDevices= createAsyncThunk<IDevices,undefined, { rejectValue:string, }>(
    ActionType.GET_ALL_DEVICES,
    async function (_,{rejectWithValue}) {
      const data =await getDevices()
      if(!data){
        return rejectWithValue('server Error')
      }
       
        return data
    }
  )
  export const getAllTypes= createAsyncThunk<IType[],undefined, { rejectValue:string, }>(
    ActionType.GET_TYPES,
    async function (_,{rejectWithValue}) {
      const data =await getTypes()
      if(!data){
        return rejectWithValue('server Error')
      }
        
        return data
    }
  )
  export const getAllBrands= createAsyncThunk<IBrands[],undefined, { rejectValue:string, }>(
    ActionType.GET_BRANDS,
    async function (_,{rejectWithValue}) {
      const data =await getBrands()
      if(!data){
        return rejectWithValue('server Error')
      }
        
        return data
    }
  )
  export const getAllCategory= createAsyncThunk<ICategory[],undefined, { rejectValue:string, }>(
    ActionType.GET_ALL_CATEGORY,
    async function (_,{rejectWithValue}) {
      const data =await getCategory()
      if(!data){
        return rejectWithValue('server Error')
      }
        
        return data
    }
  )
  export const getAllSubCategory= createAsyncThunk<ISubCategory[],undefined, { rejectValue:string, }>(
    ActionType.GET_ALL_SUB_CATEGORY,
    async function (_,{rejectWithValue}) {
      const data =await getSubCategory()
      if(!data){
        return rejectWithValue('server Error')
      }
        
        return data
    }
  )
  
  const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
     
    },
    extraReducers:(builder)=>{
      builder
      .addCase(getAllDevices.pending,(state)=>{
        state.error=null;
        state.loading=true;
      })
      
      .addCase(getAllDevices.fulfilled,(state,action)=>{
        state.devices=action.payload;
        state.loading=false;
      })
      .addCase(getAllTypes.fulfilled,(state,action)=>{
        state.types=action.payload;
      })
      .addCase(getAllBrands.fulfilled,(state,action)=>{
        state.brands=action.payload;
      })
      .addCase(getAllCategory.fulfilled,(state,action)=>{
        state.categories=action.payload;
      })
      .addCase(getAllSubCategory.fulfilled,(state,action)=>{
        state.subCategories=action.payload;
      })
      // .addMatcher(isError (state)=>{
      //   state.error=null;
      //   state.loading=true;
      // })
    }
  })
  
  //export const { } = counterSlice.actions
  export default deviceSlice.reducer
  
  function isError(action:AnyAction){
    return action.type.endsWith('rejected')
  }