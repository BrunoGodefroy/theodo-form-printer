import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import loader from './images/loader.gif'
import { loginRequest, logoutRequest } from './redux/actions';

import gapi from './services/google';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault()
    this.props.loginRequest()
  }

  handleLogout(event) {
    event.preventDefault()
    this.props.logoutRequest()
  }

  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      { this.props.loggedIn ?
        <button onClick={ this.handleLogout }>Logout</button> :
        <button onClick={ this.handleLogin }>Login</button>
      }
      { this.props.loading && <div><img src={loader} width="100"/></div> }
    </div>;
  }
}

App.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
  loginRequest: React.PropTypes.func.isRequired,
  logoutRequest: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn, loading }) => ({
  loggedIn,
  loading,
});

const mapDispatchToProps = {
  loginRequest,
  logoutRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
