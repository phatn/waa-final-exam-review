import {configureStore} from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        auth: tokenReducer,
        user: userReducer
    }
})