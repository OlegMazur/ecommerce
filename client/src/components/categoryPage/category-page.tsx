import React from 'react'
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks'
import CategoryList from '../deviceCategory/category-list';

function CategoryPage() {
    const deviceBrands=useAppSelector(state=>state.device.brands);
    const types=useAppSelector(state=>state.device.types);
    const devices=useAppSelector(state=>state.device.devices.rows);
    const location=useLocation();
    const actualDevice=deviceBrands.filter(item=>item.name===location.state);
    console.log(location.state)
  return (
    <div>
        <div></div>
        {deviceBrands.map((item)=>(
            <div key={item.id}>{item.name}</div>
        ))}
    </div>
  )
}

export default CategoryPage