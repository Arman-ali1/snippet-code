import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
    // todos: [{id:1,username:"demo"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                username:action.payload.username,
                Language: action.payload.language,
                stdin: action.payload.stdin,
                timeTake: action.payload.timeTake,
                code: action.payload.code
            }
            // console.log(action.payload.username);
            state.todos.push(todo)
            console.log("arman",state.todos);
        },
        removeTodo: (state, action) => {
            console.log(action.payload);
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer