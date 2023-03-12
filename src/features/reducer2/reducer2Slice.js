import { createSlice } from "@reduxjs/toolkit";

export const reducer2slice = createSlice({
    name: "reducer2slice",
    initialState: {value:23},
    reducers:{
        addVal: (state)=>{state.value += 5},
        removeVal: (state)=>{state.value -= 5},
        addInputAmount: (state, action)=>{ state.value += action.payload}
    }
});

export const {addVal, removeVal, addInputAmount} = reducer2slice.actions;

export const selectReducer2Val = (state)=> state.reducer2slice.value;

export default reducer2slice.reducer;