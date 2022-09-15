import React from "react";
import { useAppSelector } from "../../store/hooks";
import styles from "./admin.module.scss";
import ProductAdminPage from "./productAdminPage/product-admin-page";

function Admin() {
  const {categories,subCategories,products}=useAppSelector(state=>({categories:state.device.categories,
    subCategories:state.device.subCategories,
    products:state.device.devices.rows
  }))
  console.log(categories)
  return (
    <div className={styles.adminContainer}>
      <nav className={styles.navbar}>
        <button className={styles.navbarBtn}>Товари</button>
        <button className={styles.navbarBtn}>Замовлення</button>
      </nav>
      <div className={styles.mainContainer}>
        <ProductAdminPage categories={categories} subCategories={subCategories} products={products}/>
      </div>
    </div>
  );
}

export default Admin;
