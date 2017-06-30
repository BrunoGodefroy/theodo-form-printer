import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Header, Container, Loader, Dimmer } from 'semantic-ui-react';

import { fetchFormsRequest, chooseCompany, companies } from '../redux/actions';
import LoginButton from './LoginButton';
import {
  Error,
  ListForms,
} from './ui';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.selectFRCompany = this.selectFRCompany.bind(this);
    this.selectUKCompany = this.selectUKCompany.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.fetchFormsRequest();
  }

  selectUKCompany() {
    this.props.chooseCompany(companies.THEODO_UK)
  }

  selectFRCompany() {
    this.props.chooseCompany(companies.THEODO_FR)
  }

  render() {
    return <Container text textAlign="center">
      <Header className="no-print" as="h1" textAlign="center">Theodo Project Form - Print Me</Header>
      <Button onClick={ this.selectFRCompany } >Theodo FR</Button>
      <Button onClick={ this.selectUKCompany } >Theodo UK</Button>
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
  chooseCompany: PropTypes.func.isRequired,
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
  chooseCompany,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
