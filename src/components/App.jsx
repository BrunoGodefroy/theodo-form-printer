import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Header, Container, Loader, Dimmer, Label } from 'semantic-ui-react'

import { fetchFormsRequest, chooseCompany, companies } from '../redux/actions'
import LoginButton from './LoginButton'
import {
  Error,
  ListForms,
} from './ui'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.selectCompany = this.selectCompany.bind(this)
  }

  handleUpdate(event) {
    event.preventDefault()
    this.props.fetchFormsRequest()
  }

  selectCompany(company) {
    return () => this.props.chooseCompany(company)
  }

  renderCompanyButtons() {
    if (!this.props.isCompanyChosen) {
      return <Container>
        <Button onClick={ this.selectCompany(companies.THEODO_UK) } >Theodo UK</Button>
        <Button onClick={ this.selectCompany(companies.THEODO_FR) } >Theodo FR</Button>
        <Button onClick={ this.selectCompany(companies.FASTIT) } >FastIT</Button>
        <Button onClick={ this.selectCompany(companies.BAM) } >BAM</Button>
        <Button onClick={ this.selectCompany(companies.SICARA) } >Sicara</Button>
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
      </Container>
        <ListForms
          forms={ this.props.forms}
          questions={ this.props.questions }
          company={ this.props.selectedCompany }
          numberOfWahou = {this.props.numberOfWahou}
          numberOfOK = {this.props.numberOfOK}
          numberOfKO = {this.props.numberOfKO}
        />
    </Container>
  }

  render() {
    return <Container text textAlign="center">
      <Header className="no-print" as="h1" textAlign="center"> {this.props.selectedCompany} Project Form - Print Me</Header>
      { !this.props.isCompanyChosen ? this.renderCompanyButtons() : this.renderApp() }
    </Container>
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
})

const mapDispatchToProps = {
  fetchFormsRequest,
  chooseCompany,
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
