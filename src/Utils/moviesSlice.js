import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        topRatedMovies: null,
        upcoming: null,
        populerMovies: null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        }, 
        addTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload;
        }, 
        addPopulerMovies:(state, action) => {
            state.populerMovies = action.payload;
        }, 
        addUpcoming:(state, action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo:(state, action) => {
            state.trailerVideo = action.payload;
        }
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addUpcoming, addTopRatedMovies, addPopulerMovies} = moviesSlice.actions;
export default moviesSlice.reducer;