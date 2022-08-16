import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllBrands, getAllDevices, getAllTypes } from "../../store/redusers/deviceSlice/deviceSlice";
import CategoryList from "../deviceCategory/category-list";

import './shop.scss'

const Shop:React.FC=()=> {
 
  const devices = useAppSelector((state)=>state.device.devices);
  const types=useAppSelector((state)=>state.device.types);
  const brands=useAppSelector((state)=>state.device.brands);
  const dispatch=useAppDispatch();
  console.log("devices");
  console.log(devices);
  console.log("types");
  console.log(types);
  console.log("brands");
  console.log(brands)
  
  useEffect(()=>{
     dispatch(getAllDevices());
     dispatch(getAllTypes());
     dispatch(getAllBrands());

  },[dispatch])
  return (
    <div className="category-list">
      {types.map(({name,img,id,createdAt}) => (
        <CategoryList key={+id+createdAt} categoryName={name} categoryId={id} img={img} devices={devices.rows} types={types}/>
           
    ))}
    </div>
  );
}

export default Shop;
