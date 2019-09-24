import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
import Login from "../pages/login/Login";
import App from "../App";
import Page404 from "../components/Page404";

class RouteConfig extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/myView' component={App} />
            <Route path='/' exact component={Login} />
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(RouteConfig);