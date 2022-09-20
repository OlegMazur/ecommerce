export function imgUrlWraper(imgUrl:string|undefined){
    if(imgUrl){
       return   imgUrl
    } 
    if(!imgUrl){
      return   "/noPhoto.jpg";
    }
   
} 