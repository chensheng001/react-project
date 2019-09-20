import React, {Component} from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from "../pages/home/Home";
import Production from "../pages/production/Production";
import {hot} from 'react-hot-loader/root';
import Login from "../pages/login/Login";

class RouteConfig extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/production' component={Production} />
            <Route path='/login' component={Login} />
            <Redirect to='/home' />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(RouteConfig);