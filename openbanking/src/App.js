import logo from "./logo.svg";
import React, { useState } from 'react';
import './App.css';
import ListComponent from "./component/ListComponent";
import AxiosComponent from "./component/AxiosComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        < Route path="/list" exact>
          <ListComponent />
        </Route>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
