import { createReducer } from "@reduxjs/toolkit";

const initialState = { x: 0 };

export const myReducer = createReducer(initialState, {

    increment: (state) => {
        state.x += 1;
    },

    decrement: (state) => {
        state.x -= 1;
    },

    incrementByValue: (state, action) => {
        state.x += action.payload
    },

    decrementByValue: (state, action) => {
        state.x -= action.payload;
    }
});
