import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IDevice, ISubCategory, IType } from "../../store/redusers/deviceSlice/deviceSlice";
import { Path, RoutePath } from "../routes/enums";
import SubCategoryItem from "./category-item/sub-category-item";
import "./category-item.scss";


interface ICategoryProps {
  key: any,
  subCategories:ISubCategory[],
  categoryImg:string,
  categoryName: string,
  activeCategoryId: number,
}
function CategoryItem({  categoryName, categoryImg, activeCategoryId,subCategories }:ICategoryProps) {
  const navigate=useNavigate();
  return (
    <div className="category-item">
      
      <img src={process.env.REACT_APP_API_URL+categoryImg}  alt='photos' className="category-item__img"></img>
      <div className="category-item__list">
        {subCategories.map(({ id, title, img, categoryId }) => (
          
          activeCategoryId=== categoryId&&<SubCategoryItem key={id} subCategoryTitle={title} subCategoryId={id} />
          
          
          
        ))}
      </div>
      <button onClick={()=>navigate(RoutePath.CATEGORY_PAGE,{state:activeCategoryId})}  className="category-name">{categoryName} </button > 
    </div>
  );
}

export default CategoryItem;
