import React, { Component } from 'react';
import axios from 'axios';

export default (AuthComponent, UnAuthComponent) => {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: false,
        user: {}
      };
    }
    async componentDidMount() {
      const res = await axios.get(
        'https://eviluators-oauth-server.herokuapp.com/account',
        { withCredentials: true }
      );
      if (res.data.user) this.setState({ user: res.data.user, auth: true });
    }
    render() {
      return this.state.auth ? (
        <AuthComponent user={this.state.user} />
      ) : (
        <UnAuthComponent />
      );
    }
  }
  return RequireAuth;
};
