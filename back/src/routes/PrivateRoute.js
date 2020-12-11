import React, {  useContext } from "react";
import {  Route, Redirect } from "react-router-dom";
import { storeContext } from "../context";

function PrivateRoute(props) {
  
  
    const [currentUser, setCurrentUser] = useContext(storeContext);
    return (
      <>
        {currentUser.connected ? (
          <Route
            exact
            path={props.path}
            exact={props.exact}
            render={props.render}
          />
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }

  export default PrivateRoute;