import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/counterState/CounterSlice'
import toDoReducer from '../state/todo/todoSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: toDoReducer
    }
})