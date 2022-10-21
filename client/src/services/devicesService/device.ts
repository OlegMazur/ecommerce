import { IDevice } from './../../store/redusers/deviceSlice/deviceSlice';
import { $host } from "..";
import { Path } from "../../components/routes/enums";
import { ICategory } from "../../store/redusers/deviceSlice/deviceSlice";
interface IPayloadAllDevice {
  brandId?: number;
  typeId?: number;
  limit?: number;
  page?: number;
  title?: string;
  subCategoryId?: number;
}

export const getDevices = async (payload: IPayloadAllDevice | undefined) => {
  let data;
  if (payload?.title === "title") {
    data = await $host.get(Path.API + Path.DEVICE + "?title=" + payload.title);
  }
  if (payload?.subCategoryId) {
    data = await $host.get(
      Path.API + Path.DEVICE + "?subCategoryId=" + payload?.subCategoryId
    );
  }
  return data?.data;
};
export const getOneDevice = async (id: number) => {
  const { data } = await $host.get(Path.API + Path.DEVICE + "/" + id);
  return data;
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
export const updateCategory = async ({ id, title, img }: ICategory) => {
  const formData = new FormData();
  formData.append("id", id.toString());
  formData.append("title", title);
  formData.append("img", img);
  const { data } = await $host.put(
    Path.API + Path.CATEGORY + "/" + id,
    formData
  );
  return data;
};
export const updateSubCategory = async ({ id, title, img }: ICategory) => {
  const formData = new FormData();
  formData.append("id", id.toString());
  formData.append("title", title);
  formData.append("img", img);
  const { data } = await $host.put(
    Path.API + Path.SUBCATEGORY + "/" + id,
    formData
  );
  return data;
};

export const updateDevice = async ({ id, name, imgArr,img1,price,subCategoryId,availability,
  currency,
  unit,
  label,
  color,
  power,
  capacity,
  colorTemp,
  favotite,
  model,
  madeIn,
  optPrice,
  typeName,
  brandName }: IDevice) => {
  const formData = new FormData();
  formData.append("id", id.toString());
  formData.append("name", name);
  formData.append("price", price);
  formData.append("subCategoryId", String(subCategoryId));
  formData.append("availability", String(availability));
    formData.append("currency", String(currency));
    formData.append("unit", String(unit));
    formData.append("label",String(label));
  formData.append("color", String(color));
  formData.append("power", String(power));
  formData.append("capacity", String(capacity));
  formData.append("colorTemp", String(colorTemp));
  formData.append("favotite", String(favotite));
  formData.append("model", String(model));
  formData.append("madeIn",String( madeIn));
  formData.append("optPrice", String(optPrice));
  formData.append("typeName", String(typeName));
  formData.append("brandName", String(brandName));


   
   
  if(imgArr){
    //imgArr=JSON.stringify(imgArr)
    //console.log("imgArr",imgArr);
    formData.append("imgArr", imgArr);
  }
  if(img1){
    //console.log("img1", img1);
    formData.append("img1", img1);
  }
  //console.log("formData",formData)
  const { data } = await $host.put(
    Path.API + Path.DEVICE + "/" + id,
    formData
  );
  console.log("data[0]",data[0])
  return data[0];
};

export const getSubCategory = async () => {
  const { data } = await $host.get(Path.API + Path.SUBCATEGORY);
  return data;
};
