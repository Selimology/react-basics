import React from "react";

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />

      <h3>{props.item.text}</h3>
    </div>
  );
}

export default TodoItem;
