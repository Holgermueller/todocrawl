import { useSelector } from "react-redux";

export default function ToDos() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <section>
      <div className="todo-grid">
        {todos.map((todo, i) => (
          <div className="todo-item" key={i}>
            {todo.name}
          </div>
        ))}
      </div>
    </section>
  );
}
