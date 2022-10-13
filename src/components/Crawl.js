import { useSelector } from "react-redux";

export default function Crawler() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <section>
      <div className="crawl-feed">
        {todos.map((todo, i) => (
          <span key={i}> {todo.name}</span>
        ))}
      </div>

      <div className="crawl-feed crawl-feed-two">
        {todos.map((todo, i) => (
          <span key={i}> {todo.name}</span>
        ))}
      </div>

      {/* <div className="crawl-feed crawl-feed-two">
        <span>{todos.map((todo) => todo.name)}</span>
      </div> */}

      {/* <div className="crawl-feed">
        {todos.map((todo, i) => (
          <span key={i} className="todo">
            {todo.name}
          </span>
        ))}
      </div>
      <div className="crawl-feed crawl-feed-two">
        {todos.map((todo, i) => (
          <span key={i} className="todo">
            {todo.name}
          </span>
        ))}
      </div> */}
    </section>
  );
}
