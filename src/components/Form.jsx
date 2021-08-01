import React, { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const onChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addToDo(title);
    setTitle("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div class="form-row align-items-center">
        <div class="col-sm-3 my-1">
          <input
            class="form-control"
            type="text"
            onChange={onChangeHandler}
            value={title}
            placeholder="Enter your todo here"
          />
        </div>
        <div class="col-auto my-1">
          <input
            class="btn btn-outline-primary"
            type="submit"
            value="Add"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
