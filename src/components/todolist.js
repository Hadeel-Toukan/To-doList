import React, { Component, useRef, useState } from "react";
import "./todo.css";
import "bootstrap/dist/css/bootstrap.css";
function Todo() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef();
  const handleClick = () => {
    const text = inputRef.current.value;
    console.log(text);
    const newItem = { completed: false, text };
    setTodo([...todo, newItem]);
    inputRef.current.value = "";
  };
  const handleItemClick = (index) => {
    const newList = [...todo];
    newList[index].completed = !newList[index].completed;
    setTodo(newList);
    console.log(todo);
  };
  const handledDeleteClick = (index) => {
    const deleteItemList = [...todo];
    deleteItemList.splice(index, 1);
    setTodo(deleteItemList);
    console.log(index);
    setTodo(deleteItemList);
    console.log(todo);
  };
  return (
    <>
        <div className="Container">
          <h1>To-do List</h1>
          <div className="add">
            <input
              ref={inputRef}
              className="form-control myinput"
              type="text"
              placeholder="What's new?"
            ></input>
            <button className="button" onClick={handleClick}>
              Add
            </button>
          </div>
          <ul>
            {todo.map((item, index) => {
              return (
                <div className="list">
                  <li
                    className={item.completed ? "done" : "notdone"}
                    key={index}
                    onClick={() => {
                      handleItemClick(index);
                    }}
                  >
                    {item.text}
                  </li>
                  <span
                    className="delete"
                    onClick={() => handledDeleteClick(index)}
                  >
                    ❌
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      
    </>
  );
}

export default Todo;
