import React, { Component, Fragment } from 'react';
import LoadingModal from './LoadingModal';
import axios from 'axios';

export default (AuthComponent, UnAuthComponent) => {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auth: false,
        authCheck: false,
        user: {},
        pageLoad: false
      };
      this.showPage = this.showPage.bind(this);
    }
    async componentDidMount() {
      const res = await axios.get(
        'https://eviluators-oauth-server.herokuapp.com/account',
        { withCredentials: true, crossDomain: true }
      );
      if (res.data.user) this.setState({ user: res.data.user, auth: true });
      this.setState({ authCheck: true });
    }
    showPage() {
      this.setState(() => ({ pageLoad: true }));
    }
    render() {
      return (
        <Fragment>
          {!this.state.pageLoad && <LoadingModal>Loading</LoadingModal>}
          {this.state.auth ? (
            <AuthComponent user={this.state.user} showPage={this.showPage} />
          ) : this.state.authCheck ? (
            <UnAuthComponent showPage={this.showPage} />
          ) : null}
        </Fragment>
      );
    }
  }
  return RequireAuth;
};
