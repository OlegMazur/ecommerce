import React, { useState } from "react";
import { CategoryName } from "../../../common/enums/enums";
import { ICategory, IDevice, ISubCategory } from "../../../store/redusers/deviceSlice/deviceSlice";
import CategoryCard from "../components/categoryCard/category-card";
import ProductCard from "../components/productCard/product-card";
import ProductPage from "../components/productPage/product-page";
import SubCategoryCard from "../components/subCategoryCard/sub-category-card";
import styles from "./product-admin-page.module.scss";
interface IProps {
  categories: ICategory[];
  subCategories: ISubCategory[];
  products: IDevice[];
  status?: string;
  loading?: boolean;
}
function ProductAdminPage({ categories, subCategories, products, status, loading }: IProps) {
  const [selectedCategory, setSelectedCategory] = useState(CategoryName.PRODUCT);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<number | null>(null);
  const [activeProductId, setActiveProductId] = useState<number | null>(null);
  const [sortByActiveProducts, setSortByActiveProducts] = useState(true);
  const [sortByQuantityProducts, setSortByQuantityProducts] = useState("");
  
  const findActiveProduct=(activeId:number|null)=>{
    let result
    if(activeId){
      result= products.find((item) => item.id === activeId);
    }
    
     return result
  } 
  const activeProduct=findActiveProduct(activeProductId);
  const filterSubCategory = (arr: ISubCategory[]) => {
    let result;
    if (activeCategoryId) {
      result = arr.filter((i) => i.categoryId === activeCategoryId);
      return result;
    }
    result = arr;
    return result;
  };
  const filterProducts = (arr: IDevice[]) => {
    let result;
    if (activeSubCategoryId) {
      result = arr.filter((i) => i.subCategoryId === activeSubCategoryId);
      return result;
    }
    result = arr;
    return result;
  };
  const filteredProducts = filterProducts(products);
  const filteredSubCategories = filterSubCategory(subCategories);
  const showSubCatHandler = (categoryId: any) => {
    setActiveCategoryId(categoryId);
    setSelectedCategory(CategoryName.SUB_CATEGORY);
  };
  const showProductsHandler = (subCategoryId: number | null) => {
    setActiveSubCategoryId(subCategoryId);
    setSelectedCategory(CategoryName.PRODUCT);
  };
  const showActiveProductHandler = (productId: number | null) => {
    setActiveProductId(productId);
    setSelectedCategory(CategoryName.PRODUCT_PAGE);
    findActiveProduct(productId)
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerItem}>
          <div>Kатегорія</div>
          <div className={styles.customSelect}>
            <select
              className={styles.select}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.currentTarget.value)}
            >
              <option value={CategoryName.PRODUCT} className={styles.selectItems}>
                Товари
              </option>
              <option value={CategoryName.CATEGORY} className={styles.selectItems}>
                Категорії
              </option>
              <option value={CategoryName.SUB_CATEGORY} className={styles.selectItems}>
                Підкатегорії
              </option>
              {activeProduct?.name && (
                <option value={CategoryName.PRODUCT_PAGE} className={styles.selectItems}>
                  {activeProduct?.name ? activeProduct?.name : "Toвар"}
                </option>
              )}
            </select>
          </div>
        </div>
        <div className={styles.headerItem}>
          <button className={styles.headerItem} onClick={() => setSortByActiveProducts(true)}>
            Активні
          </button>
          <button className={styles.headerItem} onClick={() => setSortByActiveProducts(false)}>
            Неактивні
          </button>
        </div>

        <div className={styles.headerItem}>
          <div>Сортувати за залишком</div>
          <button
            className={styles.select}
            name="decrement"
            onClick={(e) => setSortByQuantityProducts(e.currentTarget.name)}
          >
            від більшого до меншого
          </button>
          <button
            className={styles.select}
            name="increment"
            onClick={(e) => setSortByQuantityProducts(e.currentTarget.name)}
          >
            від меншого до більшого
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.productPage}>
          {activeProduct && selectedCategory === CategoryName.PRODUCT_PAGE && (
            <ProductPage activeProduct={activeProduct}
            status={status}
            findActiveProduct={findActiveProduct}/>
          )}
        </div>
        <div className={styles.cardList}>
          {selectedCategory === CategoryName.CATEGORY &&
            categories.map((item, index) => (
              <CategoryCard
                key={index}
                category={item}
                status={status}
                loading={loading}
                showSubCatHandler={showSubCatHandler}
              />
            ))}
          {selectedCategory === CategoryName.SUB_CATEGORY &&
            filteredSubCategories.map((item, index) => (
              <SubCategoryCard key={index} subCategory={item} showProductsHandler={showProductsHandler} />
            ))}
          {selectedCategory === CategoryName.PRODUCT &&
            filteredProducts.map((item, index) => (
              <ProductCard
                showActiveProductHandler={showActiveProductHandler}
                key={index}
                product={item}
                status={status}
                
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default ProductAdminPage;
