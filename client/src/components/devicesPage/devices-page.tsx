import React, { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DeviceCard from "./deviceCard/device-card";
import styles from "./device-page.module.scss";
import { getAllDevices } from "../../store/redusers/deviceSlice/deviceSlice";
// interface IState {
//   activeCategoryId: number;
//   categoryName: string;
// }
function DevicesPage() {
    const dispatch=useAppDispatch();
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
      <div className={styles.subCategoryList}>
        {actualDevices.map(({ id, name,img1 }) => (
          <DeviceCard
            key={id}
            subCategoryImg={img1}
            subCategoryTitle={name}
            selectedSubCatId={id}
          />
        ))}
      </div>
    </div>
  );
}

export default DevicesPage;
