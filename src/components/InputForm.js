import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const { name } = formData;

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Error: Please fill out the field!");
    }

    const todoData = { name };

    console.log(todoData);

    dispatch(addTodo(todoData));

    setFormData({ name: "" });
  };

  return (
    <section className="to-do-form">
      <form className="form">
        <input
          className="input"
          name="name"
          type="text"
          placeholder="To do..."
          value={name}
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
