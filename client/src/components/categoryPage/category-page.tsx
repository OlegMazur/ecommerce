import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";
import SubCategoryCard from "./subCategoryCard/sub-category-card";
import styles from "./category-page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

interface IState {
  activeCategoryId: number;
  categoryName: string;
}
function CategoryPage() {
 
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const location = useLocation();
  const { activeCategoryId, categoryName } = location.state as IState;
  const actualSubCategories = subCategories.filter(
    (item) => item.categoryId === activeCategoryId
  );

  return (
    <div className={styles.card}>
      <div className={styles.navHistory}>
        <div className={styles.navHome}>
          <NavLink to={RoutePath.SHOP} className={styles.navLinkHome}>
            <FontAwesomeIcon icon={faHouse} />
            <div>Головна /</div>
          </NavLink>
        </div>
        <div className={styles.selectedCategory}>{categoryName}</div>
      </div>
      <div className={styles.subCategoryList}>
        {actualSubCategories.map(({ id, img, title }) => (
          <SubCategoryCard
            key={id}
            subCategoryImg={img}
            subCategoryTitle={title}
            selectedSubCatId={id}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
