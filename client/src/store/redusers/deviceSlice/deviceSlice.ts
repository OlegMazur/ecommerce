import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IType {
    id: number,
    name: string
  }
  interface IBrands {
    id: number,
    name: string
  } 
  interface IDevices {
    id: number,
    name: string,
    price:number,
    rating:number,
    img:string

  } 
  interface IState{
    types:IType[],
    brands:IBrands[],
    devices:IDevices[]
  }
  const initialState:IState ={
    types:[
        {id:1,name:"lijdhjdj"},
        {id:2,name:"lijdhjdj"}
    ],
    brands:[
        {id:1,name:"lijdhjdj"},
        {id:2,name:"lijdhjdj"}
    ],
    devices:[
        {id:1, name:'iphone',price:4232,rating:5,img:'csccs'},
        {id:2, name:'iphone',price:4232,rating:5,img:'csccs'},
        {id:3, name:'iphone',price:4232,rating:5,img:'csccs'},
    ]

  }
  
  const counterSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
     
    },
  })
  
  export const { } = counterSlice.actions
  export default counterSlice.reducer