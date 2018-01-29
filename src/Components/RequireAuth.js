import React, { Component } from 'react';

export default (AuthComponent, UnAuthComponent) => {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: false
      }
    }
    componentDidMount() {
      
    }
    render() {
      return this.state.auth ? <AuthComponent /> : <UnAuthComponent />;
    }
  }
  return RequireAuth;
}