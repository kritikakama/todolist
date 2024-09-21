import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import BubbleCursor from "./components/mouse";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoval, settodoval] = useState("");

  function persistdata(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addtodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistdata(newTodoList);
    setTodos(newTodoList);
  }

  function edittodo(index) {
    const valueToBeEdited = todos[index];
    settodoval(valueToBeEdited);
    deletetodo(index);
  }

  function deletetodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistdata(newTodoList);
    setTodos(newTodoList);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localtodo = localStorage.getItem("todos");
    if (!localtodo) {
      return;
    }
    localtodo = JSON.parse(localtodo).todos;
    setTodos(localtodo);
  }, []);

  return (
    <>
      <main>
        <BubbleCursor />
        <TodoInput
          settodoval={settodoval}
          todoval={todoval}
          addtodo={addtodo}
        />
        <TodoList edittodo={edittodo} deletetodo={deletetodo} todos={todos} />
      </main>
    </>
  );
}

export default App;
