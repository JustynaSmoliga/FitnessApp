import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/private-route/PrivateRoute";
import { Counter } from "./features/counter/Counter";
import Menu from "./features/menu/Menu";
import "./App.css";

//dodac route * dla not found, dodac lazy loading

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/registration">
          <p>Registration</p>
        </Route>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <PrivateRoute path="/overview">
          <p>Overview</p>
        </PrivateRoute>
        <PrivateRoute path="/diary">
          <p>My diary</p>
        </PrivateRoute>
        <PrivateRoute path="/goals">
          <p>My goals</p>
        </PrivateRoute>
        <PrivateRoute path="/weights">
          <p>My weights</p>
        </PrivateRoute>
        <Route path="/" exact>
          <Counter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
