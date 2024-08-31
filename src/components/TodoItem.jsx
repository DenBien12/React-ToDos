import styles from '../styles/TodoItem.module.css';
import { useState, useRef } from 'react';

const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const handleChange=(id) =>{
    setTodos((prevState)=>
      prevState.map((todo) =>{
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }
  const handleEditing = () =>{
    setEditing(true);
  }
  const HandUpdatedDone = (event) =>{
    if (event.key === 'Enter'){
      setUpdate(editInputRef.current.value, itemProp.id)
      setEditing(false);
    }
  };
  let viewMode = {};
  let editMode = {};
  if (editing){
    viewMode.display='none';
  } else{
    editMode.display = 'none';
  }
    return (
    <li className={styles.item}>
    <div className={styles.content} style={viewMode}>
    <input 
    type="checkbox"
    checked={itemProp.completed}
    onChange={() => handleChange(itemProp.id)}
     />
     <button onClick={handleEditing}>Edit</button>
     <button onClick={() => delTodo(itemProp.id)}>Delete</button>
     <span style={itemProp.completed ? completedStyle : null}>
     {itemProp.title}
    </span>
    </div>
    <input
      type='text'
      ref={editInputRef}
      defaultValue={itemProp.title}
      className='style.textInput'
      style={editMode}
      onKeyDown={HandUpdatedDone}
    />
    </li>
    );
  };
  export default TodoItem;