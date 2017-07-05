import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Header, Container, Loader, Dimmer } from 'semantic-ui-react';

import { fetchFormsRequest } from '../redux/actions';
import LoginButton from './LoginButton';
import {
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
      <Header className="no-print" as="h1" textAlign="center">Theodo Project Form - Print Me</Header>
      { this.props.error && <Error className="no-print">{ this.props.errorMessage }</Error> }
      { this.props.isClientLoaded && <LoginButton className="no-print"/> }
      { this.props.loggedIn && <Button
        className="no-print"
        onClick={ this.handleUpdate }
        disabled={ this.props.loading }
        >
        Update project forms
      </Button> }
      <Container textAlign="left">
        <Dimmer className="no-print" active={ this.props.loading } inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Header as="h2" className="no-print">The latest project forms</Header>
        <ListForms forms={ this.props.forms } />
      </Container>
    </Container>;
  }
}

App.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isClientLoaded: PropTypes.bool.isRequired,
  forms: PropTypes.array.isRequired,
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
