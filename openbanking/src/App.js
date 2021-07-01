import logo from "./logo.svg";
import React, { useState } from 'react';
import './App.css';
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  let [userName, setUserName] = useState("init");

  const handleChangeName = (e) => {
    const { value, name } = e.target;
    setUserName(value);
  };

  console.log(userName);
  return (
    <div className="App">
      <p>Hello, {userName}!</p>
      <input onChange={handleChangeName}></input>
      <ListComponent></ListComponent>
    </div>
  );
};

export default App;
