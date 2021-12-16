import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/private-route/PrivateRoute";
import "./App.css";
import Diary from "./features/diary/Diary";
import Registration from "./features/registration/Registration";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/registration">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Registration />
          </MuiPickersUtilsProvider>
        </Route>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <PrivateRoute path="/overview">
          <p>Overview</p>
        </PrivateRoute>
        <PrivateRoute path="/diary">
          <Diary />
        </PrivateRoute>
        <PrivateRoute path="/goals">
          <p>My goals</p>
        </PrivateRoute>
        <PrivateRoute path="/weights">
          <p>My weights</p>
        </PrivateRoute>
        <Route path="/">
          <Redirect to="/diary" />
        </Route>
        <Route path="/*">
          <p>Page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
