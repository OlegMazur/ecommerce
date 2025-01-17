import React from "react";
import { Link } from "react-router-dom";
import { imgUrlWraper } from "../../services/helpers/img-helpers";
import {
  IDevices,
  ISubCategory,
} from "../../store/redusers/deviceSlice/deviceSlice";
import { RoutePath } from "../routes/enums";
import "./category-card.scss";

interface ICategoryProps {
  key: any;
  subCategories: ISubCategory[];
  categoryImg: string;
  categoryName: string;
  activeCategoryId: number;
  devices: IDevices;
}

function CategoryCard({
  categoryName,
  categoryImg,
  activeCategoryId,
  subCategories,
  devices,
}: ICategoryProps) {
  const imgUrl = imgUrlWraper(categoryImg);
  const activeSubCategory = subCategories.filter(
    (item) => item.categoryId === activeCategoryId
  );
  return (
    <div className="category-container">
      <Link to={RoutePath.CATEGORY_PAGE + activeCategoryId}>
        <img
          src={imgUrl}
          alt="photos"
          className="category-container__img"
        ></img>
      </Link>
      <div className="category-container__content">
        <Link
          to={RoutePath.CATEGORY_PAGE + activeCategoryId}
          className="category-item__name"
        >
          {categoryName}
        </Link>
        <div className="category-item__list">
          {activeSubCategory.map(
            ({ id, title, img, categoryId }, index) =>
              index < 5 &&
              activeCategoryId === categoryId && (
                <div key={id} className="sub-category-item">
                  {index < 4 && (
                    <Link
                      to={RoutePath.SUB_CATEGORY + id}
                      className="sub-category-item__title"
                    >
                      {title}
                    </Link>
                  )}
                  {index >= 4 && (
                    <Link
                      to={RoutePath.CATEGORY_PAGE + activeCategoryId}
                      className="sub-category-item__title"
                    >
                      показати всі
                    </Link>
                  )}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
