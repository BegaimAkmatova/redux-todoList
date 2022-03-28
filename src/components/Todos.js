import { useState } from "react";
import { useDispatch } from "react-redux";

const Todos = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch({type: 'TODO', inputValue})
        setInputValue('');
    }
    return (
        <form onSubmit={submitHandler}>
            <input 
                type='text'
                onChange={inputChangeHandler}
                value={inputValue}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default Todos;