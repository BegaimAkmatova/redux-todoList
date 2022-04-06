import { useState } from "react";
import { useDispatch} from "react-redux";

const Todo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'TODO', input})
        setInput('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} value={input}/>
            <button>Add todo</button>
        </form>
    )
}

export default Todo;