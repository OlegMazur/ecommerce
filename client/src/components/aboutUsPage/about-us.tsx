import React from "react";
import styles from "./about-us.module.scss";
function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Про нас</div>
      <div className={styles.content}>  
         <span>Займаємось</span> продажем якісних ліхтарів, акумуляторів та зарядних
        пристроїв. Широко представленні моделі таких виробників як Convoy,
        Wurkkos, Sofirn та інші. Допоможемо з вибором моделі, потужності
        колірної температури, підбором акумулятора і зарядного пристрою. Наша
        основна мета - задоволений клієнт.
        </div>
       
      
    </div>
  );
}

export default AboutUs;
