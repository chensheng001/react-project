import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/css/main.less';
import {Provider} from "react-redux";
import store from "./store/store";
import RouteConfig from './router/';

ReactDom.render(
  <Provider store={store}>
    <RouteConfig />
  </Provider>
  , document.getElementById('root'));

