import React, { Component } from "react";

export default function asyncComponent(componentFn) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: ''
      }
    }

    async componentDidMount(): void {
      const {default: component} = await componentFn();
      this.setState({component});
    }

    render() {
      const C = this.state.component;
      return (
        C ? <C {...this.props} /> : null
      );
    }
  }

  return AsyncComponent;
}