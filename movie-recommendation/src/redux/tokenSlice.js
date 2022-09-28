import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    key: null,
    loggedIn: false
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {...initialState},
    reducers: {
        storeToken: (state, action) => {
            state.key = action.payload;
            state.loggedIn = true;
        },
        removeToken: (state) => {
            state.key = null;
            state.loggedIn = false;
        }
    }
})

export const { storeToken, removeToken} = tokenSlice.actions;

export default tokenSlice.reducer;