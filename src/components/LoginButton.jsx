import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loginRequest, logoutRequest } from '../redux/actions';
import { Button } from './ui';


class LoginButton extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.loginRequest();
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutRequest();
  }

  render() {
    return this.props.loggedIn ?
      <Button onClick={ this.handleLogout }>Logout</Button> :
      <Button onClick={ this.handleLogin }>Login</Button>;
  }
}

LoginButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired,
  logoutRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

const mapDispatchToProps = {
  loginRequest,
  logoutRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
