import React from "react";
import { Link } from "react-router-dom";
import { imgUrlWraper } from "../../../services/helpers/img-helpers";
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
  // const imgUrl = subCategoryImg
  //   ? process.env.REACT_APP_API_URL + subCategoryImg
  //   :  "/noPhoto.jpg";
  const imgUrl=imgUrlWraper(subCategoryImg)
  const devices = useAppSelector((state) => state.device.devices);
  return (
    <div className={styles.subCategoryCard}>
      <div className={styles.content}>
        <Link to={RoutePath.SUB_CATEGORY+ selectedSubCatId} className={styles.link}>
          <div className={styles.title}>{subCategoryTitle}</div>
          <img className={styles.img} src={imgUrl} alt="noPhoto " />
        </Link>
        <div className={styles.deviceNameContainer}>
          {devices.rows.map(({ id, name, subCategoryId }) => (
            <div key={id} className={styles.device}>
              {selectedSubCatId === subCategoryId && (
                <Link to={RoutePath.DEVICE + id} className={styles.link}>
                  <div className={styles.name}>{name}</div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
