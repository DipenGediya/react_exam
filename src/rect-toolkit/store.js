import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./reducer/reducer";

let store = configureStore({
    reducer:{
        movies:moviesReducer,
    }
})

export default store