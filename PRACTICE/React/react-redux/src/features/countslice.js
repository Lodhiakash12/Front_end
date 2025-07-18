import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value:0
}

export const countslice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        //logic
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        zero:(state)=>{
            state.value=initialState.actions
        },
         zero:(state)=>{
            state.value=initialState.actions
        }

    }
    
})

export const {increment,decrement,zero}=countslice.actions;
export default countslice.reducer;