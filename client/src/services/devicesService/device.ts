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
export const getSubCategory = async () => {
  const { data } = await $host.get(Path.API + Path.SUBCATEGORY);
  return data;
};
