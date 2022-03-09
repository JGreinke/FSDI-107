import "./todo.css";
import { useState } from "react"; 

const ToDo = () => {
    const [text, setText] = useState(""); 
    const [list, setList] = useState([]);

    const handleAdd = () => {
        console.log("clicked!", text); 
        let allTodos = [...list]; 
        allTodos.push(text); 
        setList(allTodos); 
    }
    const handleText = (e) => {
        setText(e.target.value);
    }
    return (
        <div className="todo-page">
            <h4>My Shopping List</h4>
            <input onChange={handleText} type="text"/>
            <button onClick={handleAdd} className="btn btn-sm btn-outline-dark">Add</button>

            <div className="todo-list">
                {list.map((todo)=> (
                <h6 key={todo}>{todo}</h6>
                ))}
            </div>
        </div>
    )
}

export default ToDo; 