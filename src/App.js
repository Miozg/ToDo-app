import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilderedTodos] = useState([]);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilderedTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilderedTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilderedTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header>Neven's list</header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
