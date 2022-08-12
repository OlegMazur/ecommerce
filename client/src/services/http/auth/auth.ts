import jwtDecode from "jwt-decode"
import { $host } from ".."
import { Path } from "../../../components/routes/enums"
interface IUser{
    email: string|null,
    password: string|null
  }
  interface Idata{
    id:number,
    email:string,
    role:string
  }
console.log(Path.API+Path.USER+Path.REGISTRATION)
export const registration = async({email, password}:IUser)=>{
    const {data} = await $host.post(Path.API+Path.USER+Path.REGISTRATION, {email, password, role: 'ADMIN'})
    return jwtDecode(data.token)
}
export const login = async({email, password}:IUser)=>{
    const {data} = await $host.post(Path.API+Path.USER+Path.REGISTRATION, {email, password})
    return jwtDecode(data.token)
}
export const check = async()=>{
    const response = await $host.post(Path.API+Path.AUTH+Path.REGISTRATION, )
    return response
}