import React, { useState } from "react";

const ToDo = (props) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.updateToDo(props.todo.id, title);
    props.toggleEdit(props.todo.id);
    setTitle("");
  };
  if (props.todo.toEdit) {
    return (
      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder={props.todo.title}
            onChange={onChangeHandler}
          ></input>
          <input
            class="btn btn-outline-primary"
            type="submit"
            value="Save"
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <p
          style={{
            textDecoration: props.todo.completed ? "line-through" : "none",
          }}
          key={props.todo.id}
        >
          <input
            onChange={() => props.toggleComplete(props.todo.id)}
            type="checkbox"
            defaultChecked={props.todo.completed ? true : false}
          ></input>
          {props.todo.title}
        </p>
        <button
          type="button"
          class="btn btn-outline-secondary"
          onClick={() => props.toggleEdit(props.todo.id)}
        >
          Edit
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => props.delToDo(props.todo.id)}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }
};

export default ToDo;
