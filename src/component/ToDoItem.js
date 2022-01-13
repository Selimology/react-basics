import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <input type="checkbox" checked={props.item.completed} />
      <h3>{props.item.text}</h3>
      <h3>{props.item.completed}</h3>
    </div>
  );
}

export default ToDoItem;
