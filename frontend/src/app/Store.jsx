import {configureStore} from '@reduxjs/toolkit';
import reactReducer from '../features/todo/todoSlice.js';

export const store = configureStore({
    reducer: reactReducer
});