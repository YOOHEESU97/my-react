import { useState } from "react";
import { useTodoDispatch, useTodoState } from "../contexts/TodoContext";

const TodoList = () => {
  const todos = useTodoState();
  const dispatch = useTodoDispatch();
  const [input, setInput] = useState("");
  const handleAdd = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
    };

    dispatch({
      type: "ADD",
      data: newTodo,
    });

    setInput("");
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📋 할 일 목록</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          추가
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white p-4 shadow rounded flex justify-between items-center"
          >
            {todo.text}
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE",
                  id: todo.id,
                });
              }}
              className="text-red-500 hover:text-red-700"
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
