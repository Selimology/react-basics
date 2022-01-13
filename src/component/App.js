import React from "react";
import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos:todosData
    }
  }
  render(){
    const Items = this.state.todos.map((item) => {
      return <ToDoItem key={item.id} item={item} />;
    return(
       <div>{Items}</div>;
    )
  }
}

export default App;
