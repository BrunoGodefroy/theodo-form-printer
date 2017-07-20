import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Header, Container, Loader, Dimmer, Label } from 'semantic-ui-react';

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
    this.selectBAM = this.selectBAM.bind(this);
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

  selectBAM() {
    this.props.chooseCompany(companies.BAM)
  }

  renderCompanyButtons() {
    if (!this.props.isCompanyChosen) {
      return <Container>
        <Button onClick={ this.selectTheodoUK } >Theodo UK</Button>
        <Button onClick={ this.selectTheodoFR } >Theodo FR</Button>
        <Button onClick={ this.selectFastIT } >FastIT</Button>
        <Button onClick={ this.selectBAM } >BAM</Button>
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
      <Container textAlign="center">
        <Dimmer className="no-print" active={ this.props.loading } inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
          <Header as="h2" className="no-print">The latest project forms</Header>
          <Label color="green" >WOW: {this.props.numberOfWahou} / {this.props.forms.length} - {Math.round(this.props.numberOfWahou*100/this.props.forms.length)}%</Label>
          <Label color="olive" >Success: {this.props.numberOfOK} / {this.props.forms.length} - {Math.round(this.props.numberOfOK*100/this.props.forms.length)}%</Label>
          <Label color="red" >Red Bucket: {this.props.numberOfKO} / {this.props.forms.length} - {Math.round(this.props.numberOfKO*100/this.props.forms.length)}%</Label>
      </Container>
      <Container style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }} textAlign="left">
        <ListForms forms={ this.props.forms} questions={ this.props.questions } company={ this.props.selectedCompany } />
      </Container>
    </Container>
  }

  render() {
    return <Container text textAlign="center">
      <Header className="no-print" as="h1" textAlign="center"> {this.props.selectedCompany} Project Form - Print Me</Header>
      { !this.props.isCompanyChosen ? this.renderCompanyButtons() : this.renderApp() }
    </Container>;
  }
}

App.propTypes = {
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  isClientLoaded: PropTypes.bool.isRequired,
  forms: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchFormsRequest: PropTypes.func.isRequired,
  chooseCompany: PropTypes.func.isRequired,
  isCompanyChosen: PropTypes.bool.isRequired,
  numberOfWahou: PropTypes.number.isRequired,
  numberOfOK: PropTypes.number.isRequired,
  numberOfKO: PropTypes.number.isRequired,
}

const mapStateToProps = ({
  loggedIn,
  loading,
  forms,
  questions,
  isClientLoaded,
  error,
  errorMessage,
  isCompanyChosen,
  selectedCompany,
  numberOfWahou,
  numberOfOK,
  numberOfKO,
}) => ({
  error,
  errorMessage,
  isClientLoaded,
  forms,
  questions,
  loggedIn,
  loading,
  isCompanyChosen,
  selectedCompany,
  numberOfWahou,
  numberOfOK,
  numberOfKO,
});

const mapDispatchToProps = {
  fetchFormsRequest,
  chooseCompany,
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
