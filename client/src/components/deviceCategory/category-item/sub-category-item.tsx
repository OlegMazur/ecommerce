import React from 'react'
interface ISubCategoryItemProps{
   
    subCategoryTitle:string,
    subCategoryId:number,
    
}
 const SubCategoryItem:React.FC<ISubCategoryItemProps> = ({subCategoryTitle}) => {
  return (
    <div >{subCategoryTitle}</div>
  )
}
export default SubCategoryItem