import React, { useState } from "react";
import { CategoryName } from "../../../../common/enums/enums";
import { useAppDispatch } from "../../../../store/hooks";
import { ICategory,  updateCategoryById, updateSubCategoryById } from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./category-card.module.scss";
interface IProps{
    category:ICategory
    status?:string,
    loading?:boolean,
    
    showSubCatHandler:(categoryId:number|null)=>void
}

function CategoryCard({category,status,loading,showSubCatHandler}:IProps) {
    
    const {id,title,img}=category;
    const[preview,setPreview]=useState<null|string>(null);
    const [uploadImg,setuploadImg]=useState<any>();
    const dispatch=useAppDispatch();
    const [changeMod,setChangeMod]=useState(false);
    const [cardTitle,setCardTitle]=useState(title);
    const imgHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget?.files?.[0]){
            const file=e.currentTarget.files[0]
            setuploadImg(file)
            const objectUrl = URL.createObjectURL(file)
            setPreview(objectUrl)
           
        }
    }
    
    const changeImgTitleHandler=()=>{
        const actualImg=uploadImg?uploadImg:img
       
        dispatch(updateCategoryById({id,title:cardTitle,img:actualImg}))
        
        
    }
    // const changeTitleHandler=()=>{
    //  dispatch(updateCategoryById({id,title:cardTitle,img}))
    // }
  return (
    <div className={styles.categoryCard}>
        
      <div className={styles.imgBlock}>
        <img src={preview?preview:img} alt="categoryImg" className={styles.img} />
        <input type="file"  onChange={imgHandler } accept="image/*"  className={styles.uploadImgBtn}></input>
        {preview&&<button onClick={changeImgTitleHandler} className={styles.submitImgBtn}>Зберегти зміни</button> }
      </div>
      <div className={styles.titleBlock}>
        <div>Назва категорії:</div>
        {changeMod?<input type="text" value={cardTitle} 
        className={styles.titleInput}
        onChange={(e)=>setCardTitle(e.currentTarget.value)}/>
        : <div className={styles.title} >{cardTitle}</div>}
        {changeMod?<button onClick={changeImgTitleHandler} className={styles.changeTitleBtn}>Змінити </button>
        :<button onClick={()=>setChangeMod(true)} className={styles.changeTitleBtn}>Редагувати</button>}
        <div>
        <button onClick={()=>showSubCatHandler(category.id)} >Показати підкатегорії</button>
        </div>
        
      </div>
    </div>
  );
}

export default CategoryCard;
