import { SignIn, User } from '../types';
import baseAPI from "./baseAPI"

export const cadastroUsuario = async (user: Omit<User, 'user_id'>) => {
    try {
        const response = await baseAPI.post("/user", user)       
        return response.data
    } catch (error: any) {
        return "Erro: "+ JSON.stringify(error.response.data)
    }
}
export const EditarUsuario = async (id:number, user: Omit<User, 'user_id'>) => {
    try {
        const response = await baseAPI.put(`/user/${id}`, user)       
        return response.data
    } catch (error: any) {
        return "Erro: "+ JSON.stringify(error.response.data)
    }
}

export const loginUsuario = async (signIn: SignIn) => {
    try {
        const response = await baseAPI.post("/login", signIn)
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}

export const listarTodosDonos = async () => {
    try{return baseAPI.get('/user').then (response => response.data)}
    catch (error: any) {
   return "Deu erro: "+ JSON.stringify(error.response.data)
}
}