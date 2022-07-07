import { createSlice } from "@reduxjs/toolkit"
import { User, UserState } from "../../types"

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    user: {} as User
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.token,
                user: action.payload.user
            })
        },
        //SignOut
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = usersSlice.actions

export default usersSlice.reducer;
