import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchFormsRequest } from '../redux/actions';
import LoginButton from './LoginButton';
import {
  Button,
  Loader,
  Error,
  ListForms,
} from './ui';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.fetchFormsRequest();
  }

  render() {
    return <div>
      <h1>Theodo Project Form - Print Me</h1>
      { this.props.error && <Error message={ this.props.errorMessage } /> }
      { this.props.isClientLoaded && <LoginButton /> }
      { this.props.loggedIn && <Button onClick={ this.handleUpdate }>Uptade latest forms</Button> }
      <Loader loading={ this.props.loading } />
      <ListForms forms={ this.props.forms } />
    </div>;
  }
}

App.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isClientLoaded: PropTypes.bool.isRequired,
  forms: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchFormsRequest: PropTypes.func.isRequired,
}

const mapStateToProps = ({ loggedIn, loading, forms, isClientLoaded, error, errorMessage }) => ({
  error,
  errorMessage,
  isClientLoaded,
  forms,
  loggedIn,
  loading,
});

const mapDispatchToProps = {
  fetchFormsRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
