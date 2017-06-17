import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import loader from './images/loader.gif'


class App extends PureComponent {
  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      <button>{ this.props.loggedIn ? 'Logout' : 'Login' }</button>
      { this.props.loading && <div><img src={loader} width="100"/></div> }
    </div>;
  }
}

App.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  loading: React.PropTypes.bool.isRequired,
}

const mapStateToProps = ({ loggedIn, loading }) => ({
  loggedIn,
  loading,
});

export default connect(mapStateToProps)(App)
