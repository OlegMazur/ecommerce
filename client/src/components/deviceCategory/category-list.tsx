import React from "react";
import { IDevices } from "../../store/redusers/deviceSlice/deviceSlice";
import Device from "../device/device";
import CategoryItem from "./category-item/category-item";
import "./category-list.scss";


interface ICategoryProps {
  key: number;
  name: string;
  id: number;
  img: string;
  devices: IDevices[];
}
function CategoryList({ name, id, img, devices }: ICategoryProps) {
  return (
    <div className="category-item">
      
      <img src='Photos/photo1.jpg'  alt='photos' className="category-item__img"></img>
      <div className="category-item__list">
        {devices.map(({ id, name, img, rating, price }) => (
          <CategoryItem key={id} name={name} />
          
        ))}
      </div>
      <div className="category-name">{name}</div> 
    </div>
  );
}

export default CategoryList;
