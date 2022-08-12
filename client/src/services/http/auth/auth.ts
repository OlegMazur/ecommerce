import { $host } from ".."
import { Path } from "../../../components/routes/enums"
interface IAuth {
    email:string,
    password:string
}
console.log(Path.API+Path.USER+Path.REGISTRATION)
export const registration = async({email, password}:IAuth)=>{
    const response = await $host.post(Path.API+Path.USER+Path.REGISTRATION, {email, password, role: 'ADMIN'})
    return response
}
export const login = async({email, password}:IAuth)=>{
    const response = await $host.post(Path.API+Path.USER+Path.REGISTRATION, {email, password})
    return response
}
export const check = async()=>{
    const response = await $host.post(Path.API+Path.AUTH+Path.REGISTRATION, )
    return response
}