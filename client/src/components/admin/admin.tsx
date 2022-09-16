import React from "react";
import { useAppSelector } from "../../store/hooks";
import styles from "./admin.module.scss";
import ProductAdminPage from "./productAdminPage/product-admin-page";

function Admin() {
  const {categories,subCategories,products,loading, status}=useAppSelector(state=>({
    categories:state.device.categories,
    subCategories:state.device.subCategories,
    products:state.device.devices.rows,
    loading:state.device.loading,
    status:state.device.status
  }))
  return (
    <div className={styles.adminContainer}>
      <nav className={styles.navbar}>
        <button className={styles.navbarBtn}>Товари</button>
        <button className={styles.navbarBtn}>Замовлення</button>
      </nav>
      <div className={styles.mainContainer}>
        <ProductAdminPage categories={categories} subCategories={subCategories} products={products} 
        status={status}
        loading={loading} />
      </div>
    </div>
  );
}

export default Admin;
