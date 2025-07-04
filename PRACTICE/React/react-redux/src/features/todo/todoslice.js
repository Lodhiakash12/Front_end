import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["Aniket","Aakash"]

}

export const todoslice=createSlice({
    name:"todo",
    initialState,
    reducers:{
     addTodo:(state,action)=>{
        state.todos.push(action.payload);
     }
     
    }


    

})

export const {addTodo}=todoslice.actions
export default todoslice.reducer;