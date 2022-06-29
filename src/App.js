import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleAdd = () => {
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <input placeholder="Text here  " value={text} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleClear}>Clear Todo</button>
      <h2>{text}</h2>
      <ul>
        {todos.map((todo) => (
          <li> {todo}</li>
        ))}
      </ul>
    </div>
  );
}

// <h3>Text:{text}</h3>
// <ul>
//   {todos.map((todo)=>(
//     <li> {todo}</li>
//   ))}
//   </ul>
//   </div>
//   )
//   };
