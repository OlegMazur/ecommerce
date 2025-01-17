import {
  getDevices,
  getTypes,
  getBrands,
  getSubCategory,
  getCategory,
  getOneDevice,
  updateCategory,
  updateSubCategory,
  updateDevice,
  addDevicePhoto,
} from "./../../../services/devicesService/device";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionType } from "./common";

export interface IType {
  id: number;
  name: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}
export interface ICategory {
  id: number;
  title: string;
  img: any;
  createdAt?: string;
  updatedAt?: string;
}
export interface ISubCategory {
  id: number;
  title: string;
  img: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}
export interface IBrands {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
export interface IDeviceInfo {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deviceId: number;
}

export interface IDevice {
  id: number;
  name: string;
  price: string;
  rating?: number;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  imgArr?: string;
  createdAt?: string;
  updatedAt?: string;
  typeId?: number;
  brandId?: number;
  info?: IDeviceInfo[];
  subCategoryId: number;
  searchQueries?: string;
  currency?: string;
  unit?: string;
  availability: number;
  label?: string;
  weight?: string;
  height?: string;
  length?: string;
  location?: string;
  color?: string;
  power?: string;
  capacity?: string;
  colorTemp?: string;
  favotite?: boolean;
  model?: string;
  subModel?: string;
  madeIn?: string;
  optPrice?: string;
  typeName?: string;
  brandName?: string;
}
export interface IDevices {
  count: number;
  rows: IDevice[];
}
interface IPayloadAllDevice {
  brandId?: number;
  typeId?: number;
  limit?: number;
  page?: number;
  title?: string;
  subCategoryId?: number;
}
interface IState {
  types: IType[];
  brands: IBrands[];
  categories: ICategory[];
  subCategories: ISubCategory[];
  devices: IDevices;
  error: string | null;
  loading: boolean;
  status?: string;
}
const initialState: IState = {
  types: [],
  brands: [],
  devices: {
    count: 0,
    rows: [],
  },
  categories: [],
  subCategories: [],
  status: "",
  loading: false,
  error: null,
};
interface IUpdateDevice {
  id: number;
  uploadImg: any;
}
export const getAllDevices = createAsyncThunk<IDevices, IPayloadAllDevice | undefined, { rejectValue: string }>(
  ActionType.GET_ALL_DEVICES,
  async function (payload, { rejectWithValue }) {
    const data = await getDevices(payload);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getDeviceById = createAsyncThunk<IDevice, number, { rejectValue: string }>(
  ActionType.GET_DEVICE_BY_ID,
  async function (id, { rejectWithValue }) {
    const data = await getOneDevice(id);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getAllDevicesTitle = createAsyncThunk<IDevice[], IPayloadAllDevice, { rejectValue: string }>(
  ActionType.GET_ALL_DEVICES_TITLE,
  async function (payload, { rejectWithValue }) {
    const data = await getDevices(payload);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getAllTypes = createAsyncThunk<IType[], undefined, { rejectValue: string }>(
  ActionType.GET_TYPES,
  async function (_, { rejectWithValue }) {
    const data = await getTypes();
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getAllBrands = createAsyncThunk<IBrands[], undefined, { rejectValue: string }>(
  ActionType.GET_BRANDS,
  async function (_, { rejectWithValue }) {
    const data = await getBrands();
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getAllCategory = createAsyncThunk<ICategory[], undefined, { rejectValue: string }>(
  ActionType.GET_ALL_CATEGORY,
  async function (_, { rejectWithValue }) {
    const data = await getCategory();
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const updateCategoryById = createAsyncThunk<ICategory, ICategory, { rejectValue: string }>(
  ActionType.UPDATE_CATEGORY,
  async function (payload, { rejectWithValue }) {
    const data = await updateCategory(payload);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const updateSubCategoryById = createAsyncThunk<ICategory, ICategory, { rejectValue: string }>(
  ActionType.UPDATE_SUB_CATEGORY,
  async function (payload, { rejectWithValue }) {
    const data = await updateSubCategory(payload);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const updateDeviceById = createAsyncThunk<IDevice, IDevice, { rejectValue: string }>(
  ActionType.UPDATE_DEVICE,
  async function (payload, { rejectWithValue }) {
    const data = await updateDevice(payload);

    if (!data) {
      return rejectWithValue("server Error");
    }

    return data;
  }
);
export const addImgById = createAsyncThunk<IDevice, IUpdateDevice, { rejectValue: string }>(
  ActionType.ADD_PHOTO,
  async function (payload, { rejectWithValue }) {
    const data = await addDevicePhoto(payload);
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

export const getAllSubCategory = createAsyncThunk<ISubCategory[], undefined, { rejectValue: string }>(
  ActionType.GET_ALL_SUB_CATEGORY,
  async function (_, { rejectWithValue }) {
    const data = await getSubCategory();
    if (!data) {
      return rejectWithValue("server Error");
    }
    return data;
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    changeUploadStatus: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDevices.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getAllDevices.fulfilled, (state, action) => {
        state.devices = action.payload;
        state.loading = false;
      })
      .addCase(getAllDevicesTitle.fulfilled, (state, action) => {
        state.devices.rows = action.payload;
      })
      .addCase(getAllTypes.fulfilled, (state, action) => {
        state.types = action.payload;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(updateCategoryById.pending, (state) => {
        state.status = "";
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoryById.fulfilled, (state, action) => {
        let category = state.categories.find((item) => item.id === action.payload.id);
        if (category?.title || category?.img) {
          category.title = action.payload.title;
          category.img = action.payload.img;
        }
        state.status = "Зміни збережені успішно";
        state.loading = false;
      })
      .addCase(updateSubCategoryById.pending, (state) => {
        state.status = "";
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSubCategoryById.fulfilled, (state, action) => {
        let category = state.subCategories.find((item) => item.id === action.payload.id);
        if (category?.title || category?.img) {
          category.title = action.payload.title;
          category.img = action.payload.img;
        }
        state.status = "Зміни збережені успішно";
        state.loading = false;
      })
      // .addCase(updateSubCategoryById.pending, (state) => {
      //   state.status = "";
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(updateSubCategoryById.fulfilled, (state, action) => {
      //   let category = state.subCategories.find(
      //     (item) => item.id === action.payload.id
      //   );
      //   if (category?.title || category?.img) {
      //     category.title = action.payload.title;
      //     category.img = action.payload.img;
      //   }
      //   state.status = "Зміни збережені успішно";
      //   state.loading = false;
      // })
      .addCase(updateDeviceById.pending, (state) => {
        state.status = "";
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDeviceById.fulfilled, (state, action) => {
        let device = state.devices.rows.find((item) => item.id === action.payload.id);
        //device?.brandId=action.payload.brandId
        if (device) {
          // console.log("device",device.img1)
          // device=action.payload
          device.name = action.payload.name;
          device.img1 = action.payload.img1;
          device.price = action.payload.price;
          device.availability = action.payload.availability;
          if (device.imgArr) {
            device.imgArr = action.payload.imgArr;
          }
          device.currency = action.payload.currency;
          device.unit = action.payload.unit;
          device.label = action.payload.label;
          device.color = action.payload.color;
          device.power = action.payload.power;
          device.capacity = action.payload.capacity;
          device.colorTemp = action.payload.colorTemp;
          device.favotite = action.payload.favotite;
          device.model = action.payload.model;
          device.madeIn = action.payload.madeIn;
          device.optPrice = action.payload.optPrice;
          device.typeName = action.payload.typeName;
          device.brandName = action.payload.brandName;
        }

        state.status = "Зміни збережені успішно";
        state.loading = false;
      })
      .addCase(addImgById.pending, (state) => {
        state.status = "";
        state.loading = true;
        state.error = null;
      })
      .addCase(addImgById.fulfilled, (state, action) => {
        let device = state.devices.rows.find((item) => item.id === action.payload.id);
        if (device) {
          device = action.payload;
        }
        state.status = "Зміни збережені успішно";
        state.loading = false;
      })
      .addCase(getAllSubCategory.fulfilled, (state, action) => {
        state.subCategories = action.payload;
      })
      .addCase(getDeviceById.fulfilled, (state, action) => {
        state.devices.rows = state.devices.rows.map((item) =>
          item.id === action.payload.id ? (item = action.payload) : item
        );
      });
  },
});
export const { changeUploadStatus } = deviceSlice.actions;
export default deviceSlice.reducer;

// function isError(action:AnyAction){
//   return action.type.endsWith('rejected')
// }
