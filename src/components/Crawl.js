import { useSelector } from "react-redux";

export default function Crawler() {
  const { todos } = useSelector((state) => state.todos);

  return (
    <section className="crawl-section">
      <div className="crawl-feed">
        <div className="crawl">
          {todos.map((todo, i) => (
            <div className="crawl-item" key={i}>
              {todo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
