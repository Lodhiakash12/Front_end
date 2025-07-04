import { configureStore } from "@reduxjs/toolkit";
import countslice  from "../features/countslice";
import  todoslice  from "../features/todo/todoslice";

export const store=configureStore({
    reducer:{
        counter:countslice,
        todo:todoslice
    }
})