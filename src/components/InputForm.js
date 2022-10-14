import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function InputForm() {
  const [formData, setFormData] = useState({
    todo: "",
  });

  const { todo } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") {
      alert("Error: Please fill out the field!");
    }

    const todoData = { todo };

    dispatch(addTodo(todoData));

    setFormData({ todo: "" });
  };

  return (
    <section>
      <form className="form">
        <input
          className="input"
          name="todo"
          type="text"
          placeholder="To do..."
          value={todo}
          onChange={onChange}
        />
        <input
          className="button"
          type="submit"
          onClick={handleSubmit}
          value="Submit"
        />
      </form>
    </section>
  );
}
