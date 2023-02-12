import React from "react";
import { useAppSelector } from "../../store/hooks";
import CategoryCard from "../deviceCategory/category-card";
import "./shop.scss";

const Shop: React.FC = () => {
  const categories = useAppSelector((state) => state.device.categories);
  const subCategories = useAppSelector((state) => state.device.subCategories);
  const devices = useAppSelector((state) => state.device.devices);

  return (
    <div className="category-list">
      {categories.map(({ title, img, id }) => (
        <CategoryCard
          key={id}
          categoryName={title}
          activeCategoryId={id}
          categoryImg={img}
          subCategories={subCategories}
          devices={devices}
        />
      ))}
    </div>
  );
};

export default Shop;
