import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({

    name: 'todo',

    initialState: [],

    reducers: {

        // add todo
        addTodo: (state, action) => {

            state.push(action.payload)

        },


        // remove todo
        removeTodo: (state, action) => {

            return state.filter(
                (todo) => todo.id !== action.payload
            )

        },


        // edit todo
        editTodo: (state, action) => {

            const todo = state.find(
                (item) => item.id === action.payload.id
            )

            if (todo) {

                todo.title = action.payload.title

            }

        }

    }

})

export const { addTodo, removeTodo,editTodo} = TodoSlice.actions

export default TodoSlice.reducer