import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers:{
        addnowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },
    },
});

export const {addnowPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;