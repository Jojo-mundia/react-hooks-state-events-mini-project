import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text,
      category,
    });
    setText("");
    setCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        id="details"
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories
          .filter((c) => c !== "All")
          .map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
      </select>

      {/* The button must be INSIDE the <form> and text must be EXACT */}
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
