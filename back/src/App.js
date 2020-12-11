import React, { Component, useState, useContext } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { storeContext } from "./context";
import "./scss/style.scss";
import PrivateRoute from "./routes/PrivateRoute"

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Renew = React.lazy(() =>
  import("./views/pages/renewpassword/renewpassword.js")
);
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const Tags = React.lazy(() => import("./views/pages/tags/Tags"));
const UserList = React.lazy(() => import("./views/pages/users/Userlist"));
const Posts = React.lazy(() => import("./views/pages/posts/Posts"));
const AddTags = React.lazy(() => import("./views/pages/tags/AddTags"));
const TagModify = React.lazy(() => import("./views/pages/tags/TagSelect"));



class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/renewpassword"
              name="Register Page"
              render={(props) => <Renew {...props} />}
            />
            <PrivateRoute
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <PrivateRoute
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <PrivateRoute
              exact
              path="/tags"
              name="question tags"
              render={(props) => <Tags {...props} />}
            />
            <PrivateRoute
              exact
              path="/users"
              name="users section"
              render={(props) => <UserList {...props} />}
            />
            <PrivateRoute
              exact
              path="/posts"
              name="posts section"
              render={(props) => <Posts {...props} />}
            />
            <PrivateRoute
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
