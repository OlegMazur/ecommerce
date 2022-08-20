import { $host } from "..";
import { Path } from "../../components/routes/enums";
interface IPayloadAllDevice{
    brandId?:number, 
    typeId?:number, 
    limit?:number, 
    page?:number,
    title?:string,
    subCategoryId?:number 
  }

export const getDevices = async (payload:IPayloadAllDevice|null) => {
//   let { data } = title

//     ? await $host.get(Path.API + Path.DEVICE + "?title=" + title)
//     : await $host.get(Path.API + Path.DEVICE);
  let data;
  if(payload?.title==='title'){
    data=await $host.get(Path.API + Path.DEVICE + "?title=" + payload.title)
  }  
  if(payload?.subCategoryId){
    data=await $host.get(Path.API + Path.DEVICE + "?subCategoryId=" + payload?.subCategoryId)
  } 

  return data?.data;
};
export const getTypes = async () => {
  const { data } = await $host.get(Path.API + Path.TYPES);

  return data;
};
export const getBrands = async () => {
  const { data } = await $host.get(Path.API + Path.BRANDS);

  return data;
};
export const getCategory = async () => {
  const { data } = await $host.get(Path.API + Path.CATEGORY);

  return data;
};
export const getSubCategory = async () => {
  const { data } = await $host.get(Path.API + Path.SUBCATEGORY);

  return data;
};
