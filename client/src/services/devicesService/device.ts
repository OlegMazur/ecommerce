import { $host } from "..";
import { Path } from "../../components/routes/enums";


export const getDevices = async()=>{
    const {data} = await $host.get(Path.API+Path.DEVICE)
    
    return data
}
export const getTypes = async()=>{
    const {data} = await $host.get(Path.API+Path.TYPES)
    
    return data
}
export const getBrands = async()=>{
    const {data} = await $host.get(Path.API+Path.BRANDS)
    
    return data
}