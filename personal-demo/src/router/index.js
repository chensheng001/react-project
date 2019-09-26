import React, {Component, Suspense, lazy} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {hot} from 'react-hot-loader/root';
//import Login from "../pages/login/Login";
import App from "../App";
import Page404 from "../components/Page404";
const Login = lazy(() => import('../pages/login/Login'));

// Suspense 组件做优雅降级
// lazy 处理动态引入（的组件）

class RouteConfig extends Component {
  render() {
    return (
      <div>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/myView' component={App} />
              <Route path='/' exact component={Login} />
              <Route path='/404' component={Page404} />
              <Redirect to='/404' />
            </Switch>
          </Suspense>
        </Router>
      </div>
    );
  }
}

export default hot(RouteConfig);