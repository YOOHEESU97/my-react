import { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";
import { TodoDispatchContext, TodoStateContext } from "./contexts/TodoContext";
import { todoReducer } from "./reducers/todoReducer";
import "./index.css";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      dispatch({
        type: "INIT",
        data: JSON.parse(saved),
      });
    }
  }, []);

  // useEffect [someValue] > 배열안에 지정한 데이터 값이 바뀔때마다 실행
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <TodoStateContext.Provider value={todos}>
          <TodoDispatchContext.Provider value={dispatch}>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/todo/:id" element={<TodoDetail />} />
            </Routes>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
