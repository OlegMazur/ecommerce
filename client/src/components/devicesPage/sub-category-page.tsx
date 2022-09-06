import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DeviceCard from "./deviceCard/device-card";
import styles from "./sub-category-page.module.scss";
import {
  getAllDevices,
  IDevice,
} from "../../store/redusers/deviceSlice/deviceSlice";
import {
  addDeviceInBasket,
  IBasketDevice,
  setIsActiveBasket,
} from "../../store/redusers/basketSlice/basket-slice";
import SearchBar from "../common/searchBar/search-bar";
import { exchangeUsd } from "../../services/helpers/exchange-helpers";
// interface IState {
//   activeCategoryId: number;
//   categoryName: string;
// }
interface ISearchParams {
  sortPrice?: string | null;
  deviceName?: any;
}
// interface ISortSearchDevice{
//   searchParams:ISearchParams,

// }
function SubCategoryPage() {
  const dispatch = useAppDispatch();
  //const [isActiveBasket,setIsActiveBasket]=useState(false);
  const [sortDevicePrice, setSortDevicePrice] = useState<string | null>(null);
  const [deviceSearchNames, setDeviceSearchNames] = useState<string[]>([]);

  const { id } = useParams();
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const categories = useAppSelector((state) => state.device.categories);
  const usdRate = useAppSelector((state) => state.basket.usdExchangeRate);
  const actualSubCategory = subCategories.find(
    (item) => item.id === Number(id)
  );
  const actualCategory = categories.find(
    (item) => item.id === actualSubCategory?.categoryId
  );
  const actualDevices = devices.filter(
    (item) => item.subCategoryId === Number(id)
  );
  const sortSearchDevice = (arr: IDevice[]) => {
    const SORT_PRICE_UP = "sort-price-up";
    const SORT_PRICE_DOWN = "sort-price-down";
    let newArr = arr;
    //let {sortPrice,brandName}=searchParams;
    if (sortDevicePrice === SORT_PRICE_UP) {
      newArr.sort(
        (a, b) =>
          exchangeUsd({ usdRate, price: a.price }) -
          exchangeUsd({ usdRate, price: b.price })
      );
    }
    if (sortDevicePrice === SORT_PRICE_DOWN) {
      newArr.sort(
        (a, b) =>
          exchangeUsd({ usdRate, price: b.price }) -
          exchangeUsd({ usdRate, price: a.price })
      );
    }
    if (deviceSearchNames[0]) {
      newArr = arr.filter((i) =>
        deviceSearchNames.find((name) => i.name.includes(name))
      );
    }
    return newArr;
  };
  const sortDeviceArr = sortSearchDevice(actualDevices);
  //const hasNoImg=actualDevices.find(item=>item.imgArr==null||item.img1==undefined);
  const onBuyDeviceHandler = (device: IBasketDevice) => {
    dispatch(setIsActiveBasket(true));
    dispatch(addDeviceInBasket(device));
  };
  useEffect(() => {}, [sortDevicePrice, deviceSearchNames]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("actualSubCategory", actualSubCategory);
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
        <div className={styles.selectedCategory}>
          {actualSubCategory?.title}
        </div>
      </div>
      {actualSubCategory?.id === 23680528 && (
        <div className={styles.searchBar}>
          <SearchBar
            actualDevices={devices}
            setSortDevicePrice={setSortDevicePrice}
            sortDevicePrice={sortDevicePrice}
            deviceSearchNames={deviceSearchNames}
            setDeviceSearchNames={setDeviceSearchNames}
          />
        </div>
      )}
      <div className={styles.deviceList}>
        {sortDeviceArr.map(
          ({
            id,
            name,
            img1,
            subCategoryId,
            availability,
            price,
            createdAt,
            currency,
          }) => (
            <DeviceCard
              key={id}
              currency={currency}
              deviceImgArr={img1}
              deviceName={name}
              deviceId={id}
              subCategoryId={subCategoryId}
              availability={availability}
              price={price}
              onBuyDeviceHandler={onBuyDeviceHandler}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SubCategoryPage;
