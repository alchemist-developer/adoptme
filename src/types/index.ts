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