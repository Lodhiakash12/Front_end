import { configureStore } from "@reduxjs/toolkit";
import logicSlice from "../Slice/logicSlice";

export const store = configureStore({
    reducer: {
        logic: logicSlice
    }
})