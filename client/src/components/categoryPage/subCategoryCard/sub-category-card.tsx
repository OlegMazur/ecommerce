import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { RoutePath } from "../../routes/enums";
import styles from "./sub-category.module.scss";
interface ISubCardProps {
  subCategoryImg: string;
  subCategoryTitle: string;
  selectedSubCatId: number;
}

function SubCategoryCard({
  subCategoryImg,
  subCategoryTitle,
  selectedSubCatId,
}: ISubCardProps) {
  const imgUrl = subCategoryImg
    ? process.env.REACT_APP_API_URL + subCategoryImg
    : process.env.PUBLIC_URL + "/noPhoto.jpg";
  const devices = useAppSelector((state) => state.device.devices);
  return (
    <div className={styles.subCategoryCard}>
      <div className={styles.title}>{subCategoryTitle}</div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={imgUrl} alt="noPhoto " />
        <div className={styles.deviceNameContainer}>
          {devices.rows.map(({ id, name,subCategoryId }) => (
            <div key={id}>
             {selectedSubCatId===subCategoryId&&<Link to={RoutePath.DEVICE} className={styles.link}>
              <div className={styles.deviceName}>{name}</div> 
              </Link> }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
