import React, { useEffect } from "react";
import {  NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DeviceCard from "./deviceCard/device-card";
import styles from "./device-page.module.scss";
import { getAllDevices, IDevice } from "../../store/redusers/deviceSlice/deviceSlice";
import { addDeviceInBasket, setIsActiveBasket } from "../../store/redusers/basketSlice/basket-slice";
// interface IState {
//   activeCategoryId: number;
//   categoryName: string;
// }
function DevicesPage() {
    const dispatch=useAppDispatch();
    //const [isActiveBasket,setIsActiveBasket]=useState(false);
  const { id } = useParams();
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const categorys = useAppSelector((state) => state.device.categories);
  const selectedSubCategory = subCategories.find((item) => item.id === Number(id));
  const category = categorys.find(
    (item) => item.id === selectedSubCategory?.categoryId
  );
  const actualDevices = devices.filter(
    (item) => item.subCategoryId === Number(id)
  );
  
  const onBuyDeviceHandler=(device:IDevice)=>{
    dispatch(setIsActiveBasket(true))
    dispatch(addDeviceInBasket(device))
  }
  useEffect(()=>{
    console.log('dispatch')
    dispatch(getAllDevices({subCategoryId:selectedSubCategory?.id} ))
  },[])
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
            to={RoutePath.CATEGORY_PAGE + category?.id}
            className={styles.navLinkCategory}
          >
            {category?.title}
          </NavLink>
          /
        </div>
        <div className={styles.selectedCategory}>{selectedSubCategory?.title}</div>
      </div>
      <div className={styles.deviceList}>
        {actualDevices.map(({ id, name,img1,subCategoryId,availability,price,createdAt }) => (
          <DeviceCard
            key={id}
            deviceImg1={img1}
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

export default DevicesPage;
