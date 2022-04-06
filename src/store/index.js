import { createStore } from "redux";

const init = {
    todoList: []
}

const todoReducer = (state = init,action) => {
    if(action.type === 'TODO') {
        return {
            ...state,
            todoList: [...state.todoList, {
                ...state,
                id:Math.random().toString(),
                name: action.input
            }]
        }
    }

    if(action.type === 'DELETE') {
        return {
            ...state,
            todoList: state.todoList.filter(item => item.id !== action.id)
        }
    }

    if(action.type === 'COMPLETED') {
        return {
            ...state,
            todoList: state.todoList.map(item => {
                if(item.id === action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
        }
    }

    return state;
}

const store = createStore(todoReducer)

export default store;