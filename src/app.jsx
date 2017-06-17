import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import loader from './images/loader.gif'
import { loginRequest } from './redux/actions';


class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault()
    this.props.loginRequest()
  }

  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      { this.props.loggedIn ? <button onClick={this.handleLogin}>Logout</button> :
        <button>Login</button>
      }
      { this.props.loading && <div><img src={loader} width="100"/></div> }
    </div>;
  }
}

App.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
  loginRequest: React.PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn, loading }) => ({
  loggedIn,
  loading,
});

const mapDispatchToProps = {
  loginRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
