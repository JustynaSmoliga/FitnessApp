import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/private-route/PrivateRoute";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import WrapperCard from "./features/wrapperCard/WrapperCard";
import DiaryNavBar from "./features/diary-navbar/DiaryNavBar";

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
          <WrapperCard>Overview</WrapperCard>
        </PrivateRoute>
        <PrivateRoute path="/diary">
         <DiaryNavBar/>
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
        <Route path="/*">
          <p>Page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
