import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo=({addTodoItem}) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleChange = (e) =>{
        setTitle(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
          addTodoItem(title);
          setTitle('');
          setMessage('');
        } else {
          setMessage('Please add item.');
        }
      };

    return (
        <>
        <form onSubmit={handleSubmit} className="form-container">
            <input 
            className="input-text"
            type="text" 
            placeholder="Add Todo..."
            value={title}
            onChange={handleChange}
            />
            <button className="input-submit"><FaPlusCircle
                  color="#5e5e5e"
                  size="20px"
                  className="submit-icon"
            /></button>
        </form>
        <span className="submit-warning">{message}</span>
        </>
    );
};
export default InputTodo;