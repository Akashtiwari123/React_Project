import React from "react";

function ToDoItems(props) {
  console.log(props);
  return <div>{props.name}</div>;
}

export default ToDoItems;
