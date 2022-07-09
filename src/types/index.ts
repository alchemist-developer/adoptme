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

export const  TypeErros = {
    'Erro: "E-mail já cadastrado"': 'E-mail já cadastrado. Retorne a tela anterior e escolha outro e-mail!',

    'Erro: undefined': 'Erro indefinido. Fale com a nossa central!'
  }