import React, {Component} from 'react';
import './assets/css/main.less';

import {Button, Icon} from "antd";

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/imgs/logo.png')} />
        hello demo
        <Button type='primary' loading>loading</Button>
        <Button type='primary'>
          首页<Icon type='home'/>
        </Button>
      </div>
    )
  }

}

export default App;