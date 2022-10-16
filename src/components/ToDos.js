import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

export default function ToDos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <section className="to-do-list">
      <div className="todo-grid">
        {todos.map((todo, i) => (
          <div className="todo-item" key={i}>
            <div className="todo-name">{todo.name}</div>
            <div className="done-button-container">
              <button
                id={todo.id}
                className="done-button"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                DONE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
