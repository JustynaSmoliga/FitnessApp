import { Box } from "@material-ui/core";
import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Menu from "../menu/Menu";

export interface PrivateRouteProps extends RouteProps {}

//to przekierowujemy uzytkownika na logowanie

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  //w divie zwracanym w private route przed routem renderujemy jeszcze menu
  //w tym komponencie dodatkowo sprawdzam czy uzytkownik jest zalogowany, jesli jest to zwracamy route, a jesli nie

  const history = useHistory();

  //jezeli user jest niezalogowany to
  // history.push("/registration");

  return (
    <Box display="flex" height="100vh" >
      <Menu />
      <Route {...props} />
    </Box>
  );
};

export default PrivateRoute;
