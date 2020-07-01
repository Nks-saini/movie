import React from "react";
import "./App.css";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
