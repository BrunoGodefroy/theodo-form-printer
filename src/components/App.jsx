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
    this.selectTheodoUK = this.selectTheodoUK.bind(this);
    this.selectTheodoFR = this.selectTheodoFR.bind(this);
    this.selectFastIT = this.selectFastIT.bind(this);
  }

  handleUpdate(event) {
    event.preventDefault();
    this.props.fetchFormsRequest();
  }

  selectTheodoUK() {
    this.props.chooseCompany(companies.THEODO_UK)
  }

  selectTheodoFR() {
    this.props.chooseCompany(companies.THEODO_FR)
  }

  selectFastIT() {
    this.props.chooseCompany(companies.FASTIT)
  }

  renderCompanyButtons() {
    if (!this.props.isCompanyChosen) {
      return <Container>
        <Button onClick={ this.selectTheodoUK } >Theodo UK</Button>
        <Button onClick={ this.selectTheodoFR } >Theodo FR</Button>
        <Button onClick={ this.selectFastIT } >FastIT</Button>
      </Container>
    }
  }

  renderApp() {
    return <Container>
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
    </Container>
  }

  render() {
    return <Container text textAlign="center">
      <Header className="no-print" as="h1" textAlign="center">Theodo Project Form - Print Me</Header>
      { !this.props.isCompanyChosen ? this.renderCompanyButtons() : this.renderApp() }
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
  isCompanyChosen: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ loggedIn, loading, forms, isClientLoaded, error, errorMessage, isCompanyChosen }) => ({
  error,
  errorMessage,
  isClientLoaded,
  forms,
  loggedIn,
  loading,
  isCompanyChosen,
});

const mapDispatchToProps = {
  fetchFormsRequest,
  chooseCompany,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
