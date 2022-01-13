import React from "react";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

function App() {
  const Items = todosData.map((item) => {
    return <ToDoItem key={item.id} item={item} />;
  });

  return <div>{Items}</div>;
}

export default App;
