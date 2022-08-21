export function imgUrlWraper(imgUrl:string|undefined){
    if(imgUrl){
       return  process.env.REACT_APP_API_URL + imgUrl
    } 
    if(imgUrl!){
      return  process.env.PUBLIC_URL + "/noPhoto.jpg";
    }
   
} 