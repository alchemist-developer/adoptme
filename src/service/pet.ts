import baseAPICreated from "./baseAPI"

export const cadastroPet = async (pet: any) => {
    try {
        const response = await baseAPICreated.post("/pet", pet)       
        return response.data
    } catch (error: any) {
        return "Deu erro: "+ JSON.stringify(error.response.data)
    }
}