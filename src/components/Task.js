import React from "react";

function Task({ text, category, onDeleteTask }) {
  function handleDelete() {
    onDeleteTask(text);
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
