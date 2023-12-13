import React, {useContext, useEffect} from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import AuthRouter from "../router/AuthRouter";
import ChatPages from "../pages/ChatPages";
import { createBrowserHistory } from "history";
import { AuthContext } from "../auth/AuthContext";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";


const history = createBrowserHistory();

function AppRouter() {

  const {auth, verifyToken} = useContext(AuthContext);
   
  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if(auth.checking){
    return <h1>Esperando...</h1>
  }

  return (
   <Router history={history}>
      <div>
        <Switch>
          {/* <Route path="/auth" component={AuthRouter} /> */}
          <PublicRoute isAuthenticated={auth.logged} path="/auth" component={AuthRouter} />
          {/* <Route exact path="/" component={ChatPages} /> */}
          <PrivateRoute isAuthenticated={auth.logged} exact path="/" component={ChatPages} />
          <Redirect to="/" />
        </Switch>
      </div>
   </Router>
  );
}

export default AppRouter;
