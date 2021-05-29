import React from "react";
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LogIn from "../logIn/LogIn";
import Register from "../register/Register";
import Home from "../home/Home";
import Header from "../../components/header/Header";
import Brand from '../../pages/brand/Brand';
import { history } from '../../_helpers/history';
import {PrivateRoute} from "../../components/privateRoute/PrivateRoute";

const App = () => {

  return (
      <div>
        <Router history={history}>
          <Header/>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/:id" component={Brand} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
  );
}

export default App;