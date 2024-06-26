import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null
    },
    reducers: {
        setShowGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action) => {
            state.movieResults = action.payload
        }
    }
})

export default gptSlice.reducer;
export const { setShowGptSearch, addGptMovies } = gptSlice.actions;