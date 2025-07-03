import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices/todo/todoslice'

export const store = configureStore({
    reducer: todoReducer  // Without the todos key
})