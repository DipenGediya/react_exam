import { createSlice } from "@reduxjs/toolkit"
import { delete_movies, get_movies, post_movies, update_movies } from "../api/api"

let initialState = {
    movies: [],
    isLoading: false,
    isError: false
}

let moviesSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers: (builder) => {

        //get movies
        builder.addCase(get_movies.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(get_movies.fulfilled, (state, action) => {
            state.movies = action.payload
            state.isLoading = false
        })
        builder.addCase(get_movies.rejected, (state, action) => {
            state.isError = true
        })

        //post movies                
        builder.addCase(post_movies.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(post_movies.fulfilled, (state, action) => {
            state.movies.push(action.payload)
        })
        builder.addCase(post_movies.rejected, (state, action) => {
            state.isError = true
        })

        //delete movies
        builder.addCase(delete_movies.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(delete_movies.fulfilled, (state, action) => {
            console.log(action,"forreducer");
            state.isLoading = false;
            state.movies = state.movies.filter((val) => val.id !== action.id)
        })
        builder.addCase(delete_movies.rejected, (state, action) => {
            state.isError = true
        })

        //update movies
        builder.addCase(update_movies.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(update_movies.fulfilled, (state, action) => {
            console.log(action,"forreducer");
            state.isLoading = false;
            state.movies = state.movies.map((val) => val.id == action.id ? action : val)
        })
        builder.addCase(update_movies.rejected, (state, action) => {
            state.isError = true
        })
    }
})


export const { reducer: moviesReducer } = moviesSlice;