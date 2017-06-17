import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class App extends PureComponent {
  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      <button>{ this.props.loggedIn ? 'Logout' : 'Login' }</button>
    </div>;
  }
}

App.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
}

const mapStateToProps = ({ loggedIn }) => ({
  loggedIn,
});

export default connect(mapStateToProps)(App)
