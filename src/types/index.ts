export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    user_id: number,
    name_user: string,
    email: string,
    password: string,
    confirmPassword?: string,
    image: string,
    comments?: string,
    address: string,
    phone?: string,
    mobile: string,
    whats: string,
}
export interface UserState {
    isLogged: boolean,
    accessToken: string,
    user: {}
}

export interface QueroAdotarValues {
    estado: string,
    cidade: string,
    generoDoAnimal: string,
    escolhaDoAnimal: string,
    tamanhoDoAnimal: string,
    idadeDoAnimal: string
}

export interface Pets{
    pet_id: number | null | undefined
    name_pet: string,
    type: string,   
    size: string,
    gender: string,
    city: string,
    state: string,  
    comments: string,   
    age: number,
    image_pet01: string,
}

export const  TypeErros = {
    'Erro: "E-mail já cadastrado"': 'E-mail já cadastrado. Retorne a tela anterior e escolha outro e-mail!',

    'Erro: undefined': 'Erro indefinido. Fale com a nossa central!'
  }
