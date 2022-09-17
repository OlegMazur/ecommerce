import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { ICategory, ISubCategory, updateCategoryById } from "../../../../store/redusers/deviceSlice/deviceSlice";
import styles from "./category-card.module.scss";
interface IProps{
    item:ICategory|ISubCategory
    status?:string,
    loading?:boolean
}

function CategoryCard({item,status,loading}:IProps) {
    
    const {id,title,img}=item;
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
      </div>
    </div>
  );
}

export default CategoryCard;
