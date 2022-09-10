import jwtDecode from "jwt-decode"
import { $authHost, $host } from ".."
import { Path } from "../../components/routes/enums"
interface IUser{
    email: string|null,
    password: string|null
    role?:string|null
  }
//   interface Idata{
//     id:number,
//     email:string,
//     role:string
//   }
//console.log(Path.API+Path.USER+Path.REGISTRATION)
export const registration = async({email, password}:IUser)=>{
    const {data} = await $host.post(Path.API+Path.USER+Path.REGISTRATION, {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token)
}
export const login = async({email, password}:IUser)=>{
    const {data} = await $host.post(Path.API+Path.USER+Path.LOGIN, {email, password})
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token)
}
export const logOut = async()=>{
    
    localStorage.removeItem('token');
    const data={user:null};
    return data
}

export const check = async()=>{
    const {data} = await $authHost.get(Path.API+Path.USER+Path.AUTH, )
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token)
}