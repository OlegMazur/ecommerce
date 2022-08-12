import React from "react";
import { useAppSelector } from "../../store/hooks";
import './shop.scss'
function Shop() {
  const devices = useAppSelector((state) => state.device.types);
  return (
    <div className="shop-container">
      {devices.map(({name}) => (
        
        <div className="type-item">{name}</div>
      ))}
    </div>
  );
}

export default Shop;
