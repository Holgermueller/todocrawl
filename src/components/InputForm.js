import { useState } from "react";

export default function InputForm() {
  const [formData, setFormData] = useState({
    todo: "",
  });

  const { todo } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todo);
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          name="todo"
          type="text"
          placeholder="To do..."
          value={todo}
          onChange={onChange}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </section>
  );
}
