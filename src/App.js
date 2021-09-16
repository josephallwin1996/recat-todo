import React, { useState, useEffect } from "react";
import './App.css';

//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  // Creating state to store the TodoList data.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
 
// Runs the function once
useEffect(() => {
  getLocalTodos();
}, []);  
//USE EFFECT
useEffect(() => {
  filterHandler();
  saveLocalTodos();
}, [todos, status]);

  //functions and events
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  };

  //Save todo locally
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Get todos saved Locally
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
     <header>
       <h1>Joseph's ToDo List</h1>
     </header> 
     <Form 
      setTodos={setTodos} 
      todos={todos} 
      setInputText={setInputText}
      inputText={inputText}
      setStatus={setStatus}
      
      />
     <TodoList 
      todos={todos}
      setTodos={setTodos}
      status={status}
      filteredTodos={filteredTodos}
     />
    </div>
  );
}

export default App;
