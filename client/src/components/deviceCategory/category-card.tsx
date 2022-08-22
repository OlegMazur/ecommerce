import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
// interface IState {
//   activeCategoryId: number;
//   categoryName: string;
// }
function CategoryCard({
  categoryName,
  categoryImg,
  activeCategoryId,
  subCategories,
  devices,
}: ICategoryProps) {
  // const navigate = useNavigate();
  // const navigationState: IState = {
  //   activeCategoryId: activeCategoryId,
  //   selectedategoryName: categoryName,
  // };
  return (
    <div className="category-container">
      <Link to={RoutePath.CATEGORY_PAGE + activeCategoryId}>
        <img
          src={process.env.REACT_APP_API_URL + categoryImg}
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
          {subCategories.map(
            ({ id, title, img, categoryId }) =>
              activeCategoryId === categoryId && (
                <div key={id} className="sub-category-item">
                  <Link to={RoutePath.SUB_CATEGORY+id} className="sub-category-item__title">{title}</Link>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
