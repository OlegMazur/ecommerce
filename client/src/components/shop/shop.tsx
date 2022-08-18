import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAllBrands, getAllCategory, getAllDevices, getAllSubCategory, getAllTypes } from "../../store/redusers/deviceSlice/deviceSlice";
import CategoryItem from "../deviceCategory/category-item";
import CategoryList from "../deviceCategory/category-item";

import './shop.scss'

const Shop:React.FC=()=> {
 
  //const devices = useAppSelector((state)=>state.device.devices);
  //const types=useAppSelector((state)=>state.device.types);
  //const brands=useAppSelector((state)=>state.device.brands);
  const categories=useAppSelector((state)=>state.device.categories);
  const subCategories=useAppSelector((state)=>state.device.subCategories);
  const dispatch=useAppDispatch();
  // console.log("devices");
  // console.log(devices);
  // console.log("types");
  // console.log(types);
  // console.log("brands");
  // console.log(brands)
  console.log("categories");
  console.log(categories)
  console.log("subCategories");
  console.log(subCategories)
  
  useEffect(()=>{
    //  dispatch(getAllDevices());
    //  dispatch(getAllTypes());
    //  dispatch(getAllBrands());
     dispatch(getAllCategory());
     dispatch(getAllSubCategory());

  },[])
  return (
    <div className="category-list">
      {categories.map(({title,img,id}) => (
        <CategoryItem key={id} categoryName={title} activeCategoryId={id} categoryImg={img} subCategories={subCategories} />
           
    ))}
    </div>
  );
}

export default Shop;
