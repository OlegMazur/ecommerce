import React, { useEffect } from "react";
import {  NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DeviceCard from "./deviceCard/device-card";
import styles from "./sub-category-page.module.scss";
import { getAllDevices, IDevice } from "../../store/redusers/deviceSlice/deviceSlice";
import { addDeviceInBasket, IBasketDevice, setIsActiveBasket } from "../../store/redusers/basketSlice/basket-slice";
// interface IState {
//   activeCategoryId: number;
//   categoryName: string;
// }
function SubCategoryPage() {
    const dispatch=useAppDispatch();
    //const [isActiveBasket,setIsActiveBasket]=useState(false);
  const { id } = useParams();
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const categorys = useAppSelector((state) => state.device.categories);
  const actualSubCategory = subCategories.find((item) => item.id === Number(id));
  const actualCategory = categorys.find(
    (item) => item.id === actualSubCategory?.categoryId
  );
  const actualDevices = devices.filter(
    (item) => item.subCategoryId === Number(id)
  );
  const hasNoImg=actualDevices.find(item=>item.img1===null||item.img1===undefined);
  const onBuyDeviceHandler=(device:IBasketDevice)=>{
    dispatch(setIsActiveBasket(true))
    dispatch(addDeviceInBasket(device))
  }
  useEffect(()=>{
    if(Boolean (hasNoImg)){
      dispatch(getAllDevices({subCategoryId:actualSubCategory?.id} ))
    }
      
    
  },[dispatch,hasNoImg])
  console.log("actualDevices",actualDevices)
  return (
    <div className={styles.card}>
      <div className={styles.navHistory}>
        <div className={styles.navHome}>
          <NavLink to={RoutePath.SHOP} className={styles.navLinkHome}>
            <FontAwesomeIcon icon={faHouse} />
            <div>Головна </div>
          </NavLink>
          /
          <NavLink
            to={RoutePath.CATEGORY_PAGE + actualCategory?.id}
            className={styles.navLinkCategory}
          >
            {actualCategory?.title}
          </NavLink>
          /
        </div>
        <div className={styles.selectedCategory}>{actualSubCategory?.title}</div>
      </div>
      <div className={styles.deviceList}>
        {actualDevices.map(({ id, name,imgArr,subCategoryId,availability,price,createdAt }) => (
          <DeviceCard
            key={id}
            deviceImgArr={imgArr}
            deviceName={name}
            deviceId={id}
            subCategoryId={subCategoryId}
            availability={availability}
            price={price}
            onBuyDeviceHandler={onBuyDeviceHandler}
           
          />
        ))}
      </div>
     
    </div>
  );
}

export default SubCategoryPage;
