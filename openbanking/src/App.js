import logo from "./logo.svg";
import React, { useState } from 'react';
import './App.css';
import NewsPage from "./pages/NewsPage";
import MainPage from "./pages/MainPage";
import AxiosComponent from "./component/AxiosComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/axios" exact>
          <AxiosComponent />
        </Route>
        <Route path="/news" exact>
          <NewsPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
