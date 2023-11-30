import { useState } from "react";
import "./styles.css";
import { Todoitem } from "./Todoitem";

function App() {
  const [newTodoName, setnewTodoName] = useState("");
  const [Todos, setTodos] = useState([]);

  function addnewTodo(e) {
    e.preventDefault()
    if (newTodoName === "") return null;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          name: newTodoName,
          completed: false,
          id: crypto.randomUUID(),
        },
      ];
    });
    setnewTodoName("");
  }
  function Toggletodo(todoID, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoID) return { ...todo, completed };
        return todo;
      });
    });
  }
  function deleteTodo(todoID) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoID);
    });
  }

  return (
    <>
      <form onSubmit={addnewTodo} id="new-todo-form">
        <label htmlFor="todo-input"> Todo Manager</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setnewTodoName(e.target.value)}
        />
        <button onClick={addnewTodo}> ADD </button>
        {/* display */}

        <ul id="list">
          {Todos.map((i) => {
            return (
              <Todoitem
                key={i.id}
                {...i}
                Toggletodo={Toggletodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </ul>
      </form>
    </>
  );
}

export default App;
