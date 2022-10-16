import { useSelector, useDispatch } from "react-redux";

export default function ToDos() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const removeTodo = (e) => {
    console.log(e.target.id);
    const todoToRemove = e.target.id;

    dispatch(removeTodo(todoToRemove));
  };

  return (
    <section className="to-do-list">
      <div className="todo-grid">
        {todos.map((todo, i) => (
          <div className="todo-item" key={i}>
            {todo.name}
            <div className="done-button-container">
              <button
                id={todo.name}
                className="done-button"
                onClick={removeTodo}
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
