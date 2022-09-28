import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { default as axios } from "axios";

const initialState = {
    user: null,
    movies: [],
    loadedMovies: false
};

export const getUser = createAsyncThunk(
    'user/fetchUser', async (payload) => {

        const config = {
            headers:{
                Authorization: `Bearer ${payload}`
            }
        };
        const response = await axios.get(`http://localhost:8080/api/users/me`, config);
        return response.data;
    }
);


export const getMovieRecommendation = createAsyncThunk(
    'user/fetchMovieRecommendation', async (payload) => {

        const config = {
            headers:{
                Authorization: `Bearer ${payload}`
            }
        };
        const response = await axios.get(`http://localhost:8080/api/movies`, config);
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    extraReducers: (builder) => {

        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
        });

        builder.addCase(getMovieRecommendation.fulfilled, (state, action) => {
            state.movies = action.payload;
            state.loadedMovies = true;
        });
    }
})

export default userSlice.reducer;