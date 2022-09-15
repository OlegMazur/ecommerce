import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { ICategory, ISubCategory, updateCategoryById } from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./category-card.module.scss";
interface IProps{
    item:ICategory|ISubCategory
}

function CategoryCard({item}:IProps) {
    const {id,title,img}=item;
    const dispatch=useAppDispatch();
    const [changeMod,setChangeMod]=useState(false);
    const [cardTitle,setCardTitle]=useState(title);
    
    const changeTitleHandler=()=>{
     dispatch(updateCategoryById({id,title:cardTitle,img}))
    }
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imgBlock}>
        <img src={item.img} alt="categoryImg" className={styles.img} />
        <button>Змінити фото</button>
      </div>
      <div className={styles.titleBlock}>
        {changeMod?<input type="text" value={cardTitle} onChange={(e)=>setCardTitle(e.currentTarget.value)}/>: <div>{cardTitle}</div>}
        {changeMod?<button onClick={changeTitleHandler}>Змінити</button>
        :<button onClick={()=>setChangeMod(true)}>Редагувати</button>}
      </div>
    </div>
  );
}

export default CategoryCard;
