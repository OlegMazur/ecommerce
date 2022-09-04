import React, { useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { RoutePath } from "../routes/enums";
import SubCategoryCard from "./subCategoryCard/sub-category-card";
import styles from "./category-page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";


function CategoryPage() {
 const {id}=useParams();

  const subCategories = useAppSelector((state) => state.device.subCategories);
  const categories = useAppSelector((state) => state.device.categories);
  const category=categories.find(item=>item.id===Number(id));
  
  const actualSubCategories = subCategories.filter(
    (item) => item.categoryId === Number(id)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //console.log("activeSubCategory",actualSubCategories)
  return (
    <div className={styles.card}>
      <div className={styles.navHistory}>
        <div className={styles.navHome}>
          <NavLink to={RoutePath.SHOP} className={styles.navLinkHome}>
            <FontAwesomeIcon icon={faHouse} />
            <div>Головна /</div>
          </NavLink>
        </div>
        <div className={styles.selectedCategory}>{category?.title}</div>
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
