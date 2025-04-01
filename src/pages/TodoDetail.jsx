import { useNavigate, useParams } from "react-router-dom";
import { useTodoDispatch, useTodoState } from "../contexts/TodoContext";

const TodoDetail = () => {
  const todos = useTodoState();
  const { id } = useParams();
  const setTodos = useTodoDispatch();
  const nav = useNavigate();
  const todo = todos.find((item) => {
    return String(item.id) === String(id);
  });

  const handleDelete = () => {
    const filtered = todos.filter((t) => String(t.id) !== String(id));
    setTodos(filtered);
    nav("/");
  };

  if (!todo) {
    return <div>😢 할 일을 찾을 수 없습니다.</div>;
  }
  return (
    <div>
      <h2>📝 할 일 상세</h2>
      <p>ID: {todo.id}</p>
      <p>내용: {todo.text}</p>
      <button onClick={() => nav(-1)}>뒤로가기</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoDetail;
