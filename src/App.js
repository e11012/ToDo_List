import "./App.css";

import React, { useState, useEffect} from "react";

function App() {
  const get=()=>{
    let list=localStorage.getItem('lists')
    console.log(list);
    if (list){
      return  JSON.parse(localStorage.getItem('lists'));

    }else{
      return[""]
    }
  }
  const [todos, setTodos] = useState(get());
  const [inputState, setInputState] = useState("");

  const Add = (e) => {
    e.preventDefault();

    setTodos([...todos, inputState]);

    setInputState("");
  };

  const Delete = (i) => (e) => {
    setTodos((todos_) => todos_.filter((_, k) => i !== k));
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      Add();
    }
  };
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(todos))
  },[todos]);

  return (
    <div className="App">
      <h1>TODO list</h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter New ToDo"
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            onKeyPress={handleKeypress}
          />
          <button onClick={Add}>Add</button>
        </form>
      </div>

      <ul>
        {todos.map((todo, i) => (
          <li iclass="b" key={i} onClick={Delete(i)} class="b">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


