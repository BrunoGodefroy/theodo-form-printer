import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Header, Container } from 'semantic-ui-react';

import { fetchFormsRequest } from '../redux/actions';
import LoginButton from './LoginButton';
import {
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
    return <Container text textAlign="center">
      <Header as="h1" textAlign="center">Theodo Project Form - Print Me</Header>
      { this.props.error && <Error message={ this.props.errorMessage } /> }
      { this.props.isClientLoaded && <LoginButton /> }
      { this.props.loggedIn && <Button
        onClick={ this.handleUpdate }
        disabled={ this.props.loading }
        >
        Uptade latest forms
      </Button> }
      <Loader loading={ this.props.loading } />
      <ListForms forms={ this.props.forms } />
    </Container>;
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
