import React from "react";
import {
  IDevice,
} from "../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./search-bar.module.scss";

interface IProp {
  actualDevices: IDevice[];
  sortDevicePrice: any;
  setSortDevicePrice: any;
  deviceSearchNames:string[];
  setDeviceSearchNames:any;
}
function SearchBar({
  actualDevices,
  setSortDevicePrice,
  sortDevicePrice,
  deviceSearchNames,
  setDeviceSearchNames
}: IProp) {
  const SORT_PRICE_UP = "sort-price-up";
  const SORT_PRICE_DOWN = "sort-price-down";
  let modelNameArr = [
    "S2+",
    "C8",
    "S3",
    "M1",
    "M2",
    "S9 mk",
    "С8+",
    "M3",
    "M21",
    "S21A",
    "S11",
    "M21A",
    "H1",
    "L6",
    "L2",
    "T2",
    "L21A",
    " Z1",
    "M21C-U",
    "S21B",
    "4X18A",
    "M21C",
    "L7",
    "L21B",
    "H2",
    "3X21A",
    "M21D",
    "M26C",
    "M21E",
    "S12",
    "L8",
  ];
  const newDeviceSearchNames=Array.from(deviceSearchNames);
  const sortPriceHandler = (e: any) => {
    setSortDevicePrice( e.currentTarget.value );
  };
  const deviceNameHandler=(e:React.MouseEvent<HTMLButtonElement>)=>{
      const name=(e.currentTarget.name)
      if(!newDeviceSearchNames?.find(item=>item===name)){
        newDeviceSearchNames?.push(name)
       return  setDeviceSearchNames(newDeviceSearchNames)
      }
      if(newDeviceSearchNames?.find(item=>item===name)){
        const result= newDeviceSearchNames.filter(item=>item!==name)
         setDeviceSearchNames(result)
      }
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.sortPriceTitle}>Сортувати за ціною</div>
        <div className={styles.sortPriceBlock}>
          <button value={SORT_PRICE_UP} onClick={(e) => sortPriceHandler(e)} 
          className={`${styles.sortPriceItem} ${sortDevicePrice===SORT_PRICE_UP&&styles.active}`}>
            від меншої до більшої
          </button>
          <button value={SORT_PRICE_DOWN} onClick={(e) => sortPriceHandler(e) } 
          className={`${styles.sortPriceItem} ${sortDevicePrice===SORT_PRICE_DOWN&&styles.active}`}>
            від більшої до меншої
          </button>
        </div>
      </header>
      <footer className={styles.footer}>
        <h4>Оберіть модель</h4>
        <nav className={styles.deviceNameBlock}>
          {modelNameArr.sort().map((item, index) => (
            <button onClick={(e)=>deviceNameHandler(e)} value={item} name={item} key={index} 
            className={`${styles.deviceNameItem} ${newDeviceSearchNames?.find(name=>item===name)&&styles.active}`} >
              {item}
            </button>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default SearchBar;
