import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    display : 'flex',
    logo: 'center'
}

const componentSlice = createSlice({
    name: '@component',
    initialState,
    reducers: {
        setDisplay(state, action) {
            state.display = action.payload;
        },
        setLogo(state, action) {
            state.logo = action.payload;
        }
    }
});

export const { setDisplay, setLogo } = componentSlice.actions;
export default componentSlice.reducer;

