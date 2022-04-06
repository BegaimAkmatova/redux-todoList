
import { useDispatch } from 'react-redux';

const TodoList = (props) => {
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch({type: 'DELETE', id})
    }

    const completedHandler = (id) => {
        dispatch({type: 'COMPLETED', id})
    }
  
    return (
        <ul>
            {props.list.map(todo => (
                <li 
                    style={{textDecoration: todo.completed ? 'line-through' : ''}}
                key={todo.id}>{todo.name}
                    <button onClick={() => {completedHandler(todo.id)}}>X</button>
                    <button onClick={() => {deleteHandler(todo.id)}}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;