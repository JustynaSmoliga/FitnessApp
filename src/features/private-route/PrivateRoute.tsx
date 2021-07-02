import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core";
import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Menu from "../menu/Menu";

export interface PrivateRouteProps extends RouteProps {}


const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {

  const history = useHistory();

  //TODO Checking if user is logged in. If user isn't logged in, redirect to log in route  
  // history.push("/login");

  return (

    <Box display="flex" height="100vh" >
      <Menu />
      <Container>
      <Route {...props} />
      </Container>
    </Box>
  );
};

export default PrivateRoute;
