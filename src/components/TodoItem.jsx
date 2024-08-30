import styles from '../styles/Header.module.css';
import { useState } from 'react';
const TodoItem = ({ itemProp, setTodos, delTodo, setUpdate }) => {
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
      value={itemProp.title}
      className='style.textInput'
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={HandUpdatedDone}
    />
    </li>
    );
  };
  export default TodoItem;