import React from 'react'
interface ICategoryItemProps{
    key:any,
    name:string
}
 const CategoryItem:React.FC<ICategoryItemProps> = ({name}) => {
  return (
    <div >{name}</div>
  )
}
export default CategoryItem