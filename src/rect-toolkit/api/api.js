import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, DELETE_MOVIES, GET_MOVIES, GET_USER, POST_MOVIES, POST_USER, UPDATE_MOVIES } from "../constant";

export let get_movies = createAsyncThunk("GET_MOVIES", async (action) => {
    let { data } = await axios.get(BASE_URL + GET_MOVIES)
    return data;
})

export let post_movies = createAsyncThunk("POST_MOVIES", async (action) => {
    console.log(action, "from post movies");
    let { data } = await axios.post(BASE_URL + POST_MOVIES, action)
    return data;
})

export let delete_movies = createAsyncThunk("DELETE_MOVIES", async (action) => {
    let { data } = await axios.delete(BASE_URL + DELETE_MOVIES + action)
    return data;
})

export let update_movies = createAsyncThunk("UPDATE_MOVIES", async (action) => {
    let { data } = await axios.put(BASE_URL + UPDATE_MOVIES + action.id, action)
})
