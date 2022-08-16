import React from 'react'
import { IDevice } from '../../../store/redusers/deviceSlice/deviceSlice'
interface ICategoryItemProps{
    key:any,
    name:string,
    id:number,
    devices:IDevice[]
}
 const CategoryItem:React.FC<ICategoryItemProps> = ({name,id,devices}) => {
  return (
    <div >{name}</div>
  )
}
export default CategoryItem