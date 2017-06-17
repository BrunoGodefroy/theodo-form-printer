import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import loader from './images/loader.gif'
import { loginRequest, logoutRequest, fetchFormsRequest } from './redux/actions';

import gapi from './services/google';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.loginRequest();
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logoutRequest();
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.fetchFormsRequest();
  }

  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      { this.props.loggedIn ?
        <button onClick={ this.handleLogout }>Logout</button> :
        <button onClick={ this.handleLogin }>Login</button>
      }
      { this.props.loggedIn && <button onClick={ this.handleUpdate }>Uptade latest forms</button> }
      { this.props.loading && <div><img src={loader} width="100"/></div> }
      <ul>
        { Object.keys(this.props.forms).map(project =>
          <li key={ `key-${project}` }>
            <a target="_blank" href={ this.props.forms[project] }>{ project }</a>
          </li>
        ) }
      </ul>
    </div>;
  }
}

App.propTypes = {
  forms: React.PropTypes.object.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
  fetchFormsRequest: React.PropTypes.func.isRequired,
  loginRequest: React.PropTypes.func.isRequired,
  logoutRequest: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn, loading, forms }) => ({
  forms,
  loggedIn,
  loading,
});

const mapDispatchToProps = {
  fetchFormsRequest,
  loginRequest,
  logoutRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
