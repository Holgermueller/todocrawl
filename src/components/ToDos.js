import { useSelector } from "react-redux";

export default function ToDos() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <section className="to-do-list">
      <div className="todo-grid">
        {todos.map((todo, i) => (
          <div className="todo-item" key={i}>
            {todo.name}
            <div className="done-button-container">
              <button className="done-button">DONE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
