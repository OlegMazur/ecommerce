import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IType {
    id: number,
    name: string,
    img:string
  }
  export interface IBrands {
    id: number,
    name: string
  } 
  export interface IDevices {
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
        {id:1,name:"Ліхатики",img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:2,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:3,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:4,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:5,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:6,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:7,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},
        {id:8,name:"Зарядні пристрої", img:'https://hotline.ua/computer-zaryadnye-ustrojstva-dlya-akkumulyatorov-aa-aaa/liitokala-lii-pd4/'},

    ],
    brands:[
        {id:1,name:"Convoy"},
        {id:2,name:"Liitokala"}
    ],
    devices:[
        {id:1, name:'iphone',price:4232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:2, name:'iphone',price:4200,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:3, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:4, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:5, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:6, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
        {id:7, name:'iphone',price:232,rating:5,img:'https://ultrafiolet.guru/kupit-uv-svetodiodnye-fonariki/convoy-s2-plus-365nm.html'},
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