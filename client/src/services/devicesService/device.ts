import { $host } from "..";
import { Path } from "../../components/routes/enums";

export const getDevices = async (title?: string | null) => {
  const { data } = title
    ? await $host.get(Path.API + Path.DEVICE + "?title=" + title)
    : await $host.get(Path.API + Path.DEVICE);

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
export const getSubCategory = async () => {
  const { data } = await $host.get(Path.API + Path.SUBCATEGORY);

  return data;
};
