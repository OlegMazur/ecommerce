import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IDevices,
  ISubCategory,
} from "../../store/redusers/deviceSlice/deviceSlice";
import { RoutePath } from "../routes/enums";
import "./category-item.scss";

interface ICategoryProps {
  key: any;
  subCategories: ISubCategory[];
  categoryImg: string;
  categoryName: string;
  activeCategoryId: number;
  devices: IDevices;
}
interface IState {
  activeCategoryId: number;
  categoryName: string;
}
function CategoryItem({
  categoryName,
  categoryImg,
  activeCategoryId,
  subCategories,
  devices,
}: ICategoryProps) {
  const navigate = useNavigate();
  const navigationState: IState = {
    activeCategoryId: activeCategoryId,
    categoryName: categoryName,
  };
  return (
    <div className="category-container">
      <img
        src={process.env.REACT_APP_API_URL + categoryImg}
        alt="photos"
        className="category-container__img"
      ></img>
      <div className="category-container__content">
        <button
          onClick={() =>
            navigate(RoutePath.CATEGORY_PAGE, { state: navigationState })
          }
          className="category-item__name"
        >
          {categoryName}
        </button>
        <div className="category-item__list">
          {subCategories.map(
            ({ id, title, img, categoryId }) =>
              activeCategoryId === categoryId && (
                <div key={id} className="sub-category-item">
                   <div className="sub-category-item__title">{title}</div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
