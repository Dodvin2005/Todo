import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './Slices/TodoSlice'

const TodoStore = configureStore({

    reducer: {

        todo: TodoReducer

    }

})

export default TodoStore