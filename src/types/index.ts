export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    name_user: string,
    email: string,
    password: string,
    confirmPassword?: string,
}
export interface UserState {
    isLogged: boolean,
    accessToken: string,
    id?: number,
    name_user?: string,
    email?: string,
}