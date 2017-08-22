import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import { loginRequest, logoutRequest } from '../redux/actions'

class LoginButton extends PureComponent {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()
    this.props.loginRequest()
  }

  handleLogout (event) {
    event.preventDefault()
    this.props.logoutRequest()
  }

  render () {
    return this.props.loggedIn
      ? <Button className={this.props.className} onClick={this.handleLogout} disabled={this.props.loading}>Logout</Button>
      : <Button className={this.props.className} onClick={this.handleLogin} disabled={this.props.loading}>Login</Button>
  }
}

LoginButton.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginRequest: PropTypes.func.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string
}

const mapStateToProps = ({ loggedIn, loading }) => ({
  loggedIn,
  loading
})

const mapDispatchToProps = {
  loginRequest,
  logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
