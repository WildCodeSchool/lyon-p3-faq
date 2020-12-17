import React, {  useContext } from "react";
import {  Route, Redirect } from "react-router-dom";
import { storeContext } from "../context";
const Page404 = React.lazy(() => import("../views/pages/page404/Page404"));

function PrivateRoute(props) {
  console.log("props: ",props.location.pathname)
  const route= props.location.pathname
  console.log("route :", route)
  
    const [currentUser, setCurrentUser] = useContext(storeContext);


    if (props.location.pathname == '/pages/users') { console.log("PAGE USERS")}
    return (
      <>
        {currentUser.connected && currentUser.role_id !==5? (

((currentUser.role_id <3 &&  route == '/pages/users') ||  (currentUser.role_id <3 && route == '/pages/tags')) ? 
         
<Redirect to="/404" />:
<Route
            exact
            path={props.location.pathname}
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



