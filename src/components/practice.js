import React, { Component, useRef, useState } from "react";

function Practice() {
    const [list,setList]= useState([]);
    const inputRef= useRef();
    const handleClick = () => {
        const text = inputRef.current.value;
        setList([...list,text]);
    }
  return (
  <>
  <h1>Todo-List</h1>
  <input type="text" ref={inputRef} placeholder="What's new ?"></input>
  <button onClick={handleClick}>Add</button>
  <ul>
    {list.map((item,index)=><li key={index}>{item}</li>)}
  </ul>
  </>

  )
  
}

export default Practice;
