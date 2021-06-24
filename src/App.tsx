import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/PrivateRoute/PrivateRoute";
import { Counter } from "./features/counter/Counter";
import Menu from './features/Menu/Menu';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/registration">
          <p>registration</p>
        </Route>
        <Route path="/login">
          <p>login</p>
        </Route>
        <PrivateRoute path="/overview">
          <p>overview</p>
        </PrivateRoute>
        <Route path="/">
          <Counter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
