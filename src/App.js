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

  //Run ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
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

  //Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("spremi", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("spremi") === null) {
      localStorage.setItem("spremi", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("spremi"));
      setTodos(todoLocal);
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
