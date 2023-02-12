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
  const imgUrl = imgUrlWraper(subCategoryImg);
  const devices = useAppSelector((state) => state.device.devices.rows);
  const actualDevices = devices.filter(
    (item) => item.subCategoryId === selectedSubCatId
  );
  return (
    <div className={styles.subCategoryCard}>
      <div className={styles.content}>
        <Link
          to={RoutePath.SUB_CATEGORY + selectedSubCatId}
          className={styles.link}
        >
          <div className={styles.title}>{subCategoryTitle}</div>
          <img className={styles.img} src={imgUrl} alt="noPhoto " />
        </Link>
        <div className={styles.deviceNameList}>
          {actualDevices.map(
            ({ id, name, subCategoryId }, index) =>
              index < 5 && (
                <div className={styles.device} key={index}>
                  {index < 4 && (
                    <div className={styles.deviceItem}>
                      <Link
                        to={RoutePath.DEVICE + id}
                        className={styles.deviceLink}
                      >
                        <div className={styles.name}>{name}</div>
                      </Link>
                    </div>
                  )}
                  {index >= 4 && (
                    <div className={styles.deviceItem}>
                      <Link
                        to={RoutePath.SUB_CATEGORY + selectedSubCatId}
                        className={styles.deviceLinkAll}
                      >
                        <div className={styles.name}> показати всі</div>
                      </Link>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
