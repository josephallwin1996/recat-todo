import React from "react";

//import components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed}
                    setTodos={setTodos}
                    todos={todos}
                    todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;