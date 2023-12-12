import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import AuthRouter from "../router/AuthRouter";
import ChatPages from "../pages/ChatPages";
import { createBrowserHistory } from "history";


const history = createBrowserHistory();

function AppRouter() {
  return (
   <Router history={history}>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={ChatPages} />
          <Redirect to="/" />
        </Switch>
      </div>
   </Router>
  );
}

export default AppRouter;
