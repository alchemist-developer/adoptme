import { SignIn, User } from '../types';
import baseAPI from "./baseAPI"


export const cadastroUsuario = async (user: Omit<User, "id">) => {
    try {
        const response = await baseAPI.post("/user", user)
        console.log(`${response.data}`);        
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}

export const loginUsuario = async (signIn: SignIn) => {
    try {
        const response = await baseAPI.post("/login", signIn)
        console.log(response.data);  
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}