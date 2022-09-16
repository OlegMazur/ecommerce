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
    //const [cardImg,setCardImg]=useState(img);
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
            //setCardImg(file.name)
        }
       
       
    }
    console.log(uploadImg)
    const changeImgHandler=()=>{
        dispatch(updateCategoryById({id,title:cardTitle,img:uploadImg}))
    }
    const changeTitleHandler=()=>{
     dispatch(updateCategoryById({id,title:cardTitle,img}))
    }
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imgBlock}>
        <img src={preview?preview:img} alt="categoryImg" className={styles.img} />
        <input type="file" onChange={e=>imgHandler(e) } accept="image/*"></input>
        <button onClick={changeImgHandler}>Підтвердити зміни</button>
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
