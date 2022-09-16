import React, { useState } from "react";
import {
  ICategory,
  IDevice,
  ISubCategory,
} from "../../../store/redusers/deviceSlice/deviceSlice";
import CategoryCard from "../components/categoryCard/category-card";
import styles from "./product-admin-page.module.scss";
interface IProps {
  categories: ICategory[];
  subCategories: ISubCategory[];
  products: IDevice[];
  status?: string;
  loading?:boolean;
}
function ProductAdminPage({ categories, subCategories, products,status,loading }: IProps) {
  const [productSelector, setProductSelector] = useState("All");
  const [activeProducts, setActiveProducts] = useState(true);
  const [sortByNumberProducts, setSortByNumberProducts] = useState("");

  console.log(sortByNumberProducts);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerItem}>
          <div>Kатегорія</div>
          <div className={styles.customSelect}>
            <select
              className={styles.select}
              onClick={(e) => setProductSelector(e.currentTarget.value)}
            >
              <option value="All" className={styles.selectItems}>
                Всі товари
              </option>
              <option value="Category" className={styles.selectItems}>
                Категорії
              </option>
              <option value="SubCategory" className={styles.selectItems}>
                Підкатегорії
              </option>
            </select>
          </div>
        </div>
        <div className={styles.headerItem}>
          <div>статус</div>
          <button
            className={styles.headerItem}
            onClick={() => setActiveProducts(true)}
          >
            Активні
          </button>
          <button
            className={styles.headerItem}
            onClick={() => setActiveProducts(false)}
          >
            Неактивні
          </button>
        </div>

        <div className={styles.headerItem}>
          <div>Сортувати за залишком</div>
          <button
            className={styles.select}
            name="decrement"
            onClick={(e) => setSortByNumberProducts(e.currentTarget.name)}
          >
            від більшого до меншого
          </button>
          <button
            className={styles.select}
            name="increment"
            onClick={(e) => setSortByNumberProducts(e.currentTarget.name)}
          >
            від меншого до більшого
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.cardList}>
          {categories.map((item,index) => (
           <CategoryCard key={index} item={item} status={status} loading={loading}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductAdminPage;
