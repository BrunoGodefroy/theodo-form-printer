import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Container, Loader, Dimmer, Divider } from 'semantic-ui-react'

import {
  LoginButton,
  SelectCompanyButtons,
  ListForms,
  UpdateFormsButton
} from '@components/logic'
import { Error } from '@components/ui'

class App extends PureComponent {
  render () {
    return <Container text textAlign='center'>
      <Container className='no-print' textAlign='center'>
        <Dimmer className='no-print' active={this.props.loading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </Container>
      <Header className='no-print' as='h1' textAlign='center'> { this.props.selectedCompany.name } Project Form - Print Me</Header>
      <Container className='no-print'>
        <LoginButton />
        { this.props.loggedIn && <UpdateFormsButton /> }
      </Container>
      <Divider className='no-print' />
      <Container className='no-print'>
        { this.props.loggedIn && <SelectCompanyButtons /> }
      </Container>
      { this.props.error && <Error className='no-print'>{ this.props.errorMessage }</Error> }
      <Container>
        { this.props.isCompanyChosen && <ListForms /> }
      </Container>
    </Container>
  }
}

App.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  isCompanyChosen: PropTypes.bool.isRequired,
  selectedCompany: PropTypes.object
}

const mapStateToProps = ({
  loading,
  loggedIn,
  error,
  errorMessage,
  isCompanyChosen,
  selectedCompany
}) => ({
  loading,
  error,
  errorMessage,
  loggedIn,
  isCompanyChosen,
  selectedCompany
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
