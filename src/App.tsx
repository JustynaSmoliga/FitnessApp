import { Redirect, Route, Switch } from "react-router-dom";
import PrivateRoute from "./features/private-route/PrivateRoute";
import "./App.css";
import Diary from "./features/diary/Diary";
import Registration from "./features/registration/Registration";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Box } from "@material-ui/core";
import Select from "./features/select/Select";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/registration">
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Box
              width="100%"
              height="100vh"
              display="flex"
              className="background"
              justifyContent="center"
              // paddingLeft="20%"
            >
              <Registration />
            </Box>
          </MuiPickersUtilsProvider>
        </Route>
        <Route path="/login">
          <Select />
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
