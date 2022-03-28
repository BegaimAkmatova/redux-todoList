
import { createStore } from 'redux';

const initTodo = {
    todoList: [],
    completed: false
}

const reducerTodo = (state=initTodo, action) => {
    if(action.type === 'TODO') {
        return {
            ...state,
            todoList: [...state.todoList, {
                name:action.inputValue,
                id:Math.random().toString(),
                completed:false
            }]
        }
    }

    if(action.type === 'DELETE') {
        return {
            ...state,
            todoList: state.todoList.filter(todo => todo.id !== action.id)
        }
    }

    if(action.type === 'COMPLETED') {
        return {
            ...state,
            todoList: state.todoList.map(todo => {
                if(todo.id === action.id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        }
    }
    return state
}

const store = createStore(reducerTodo);

export default store;