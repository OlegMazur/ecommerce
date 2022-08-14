import React from "react";
import { useAppSelector } from "../../store/hooks";
import CategoryList from "../deviceCategory/category-list";
import CategoryItem from "../deviceCategory/category-list";
import './shop.scss'

const Shop:React.FC=()=> {
  const category = useAppSelector((state) => state.device.types);
  const devices = useAppSelector((state)=>state.device.devices)
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div className="category-list">
      {category.map(({name,img,id}) => (
        <CategoryList key={id} name={name} id={id} img={img} devices={devices}/>
           
    ))}
    </div>
  );
}

export default Shop;
