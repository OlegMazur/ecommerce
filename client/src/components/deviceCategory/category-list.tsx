import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IDevice, IType } from "../../store/redusers/deviceSlice/deviceSlice";
import { Path, RoutePath } from "../routes/enums";
import CategoryItem from "./category-item/category-item";
import "./category-list.scss";


interface ICategoryProps {
  key: any;
  categoryName: string;
  categoryId: number;
  img: string;
  devices: IDevice[];
  types: IType[]
}
function CategoryList({  categoryName, devices,types,categoryId }:ICategoryProps) {
  const navigate=useNavigate();
  return (
    <div className="category-item">
      
      <img src='Photos/photo1.jpg'  alt='photos' className="category-item__img"></img>
      <div className="category-item__list">
        {types.map(({ id, name }) => (
          <CategoryItem key={id} name={name} id={id} devices={devices}/>
          
        ))}
      </div>
      <button onClick={()=>navigate(RoutePath.CATEGORY_PAGE,{state:categoryId})}  className="category-name">{categoryName} </button > 
    </div>
  );
}

export default CategoryList;
