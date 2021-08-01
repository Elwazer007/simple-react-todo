import React, { useState } from "react";
import ToDo from "./ToDo";
const MainToDo = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            updateToDo={props.updateToDo}
            delToDo={props.delToDo}
            toggleEdit={props.toggleEdit}
            toggleComplete={props.toggleComplete}
          ></ToDo>
        ))}
      </ul>
    </div>
  );
};

export default MainToDo;
