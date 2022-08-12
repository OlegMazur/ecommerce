import React from 'react'
import { IDevices } from '../../store/redusers/deviceSlice/deviceSlice'
import Device from '../device/device'

interface ICategoryProps{
    key:number,
    name:string,
    id:number, 
    img:string,
    devices:IDevices[]
}
function CategoryItem({ name, id, img, devices}:ICategoryProps) {
       
    return (
    <div className="item-type">{name}
      {
        devices.map(({id,name,img,rating,price})=>(
            <div key={id}>{name}</div>
           // <Device key={id} name={name} img={img} rating={rating} price={price}/>
        ))
      }
    
    </div>
  )
}

export default CategoryItem