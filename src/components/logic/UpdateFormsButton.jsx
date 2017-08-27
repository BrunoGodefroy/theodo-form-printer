import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import { fetchFormsRequest } from '@redux/actions'

class UpdateFormsButton extends PureComponent {
  constructor (props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate (event) {
    event.preventDefault()
    this.props.fetchFormsRequest()
  }

  render () {
    return <Button onClick={this.handleUpdate}>
      Update project forms
    </Button>
  }
}

UpdateFormsButton.propTypes = {
  fetchFormsRequest: PropTypes.func.isRequired
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  fetchFormsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateFormsButton)
