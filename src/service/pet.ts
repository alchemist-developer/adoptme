import baseAPICreated from "./baseAPI"
import baseAPI from "./baseAPI"

export const cadastroPet = async (pet: any) => {
    try {
        const response = await baseAPI.post("/pet", pet)       
        return response.data
    } catch (error: any) {
        return "Deu erro: "+ JSON.stringify(error.response.data)
    }
}

export const listarTodos = async () => {
         try{return baseAPICreated.get('/pet').then (response => response.data)}
         catch (error: any) {
        return "Deu erro: "+ JSON.stringify(error.response.data)
    }
}

export const listarId = async (id:number) => {
        try{
            return baseAPI.get(`/user/${id}`).then (response => response.data)}
        catch (error: any) {
            return "Deu erro: "+ JSON.stringify(error.response.data)
    }
}

export const deletarPet = async (id:number) => {
    try{
        return await baseAPI.put(`/pet/delete/${id}`)}
    catch (error: any) {
        return "Deu erro: "+ JSON.stringify(error.response.data)
}
}