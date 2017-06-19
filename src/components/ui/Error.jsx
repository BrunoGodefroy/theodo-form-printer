import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react'


class Error extends PureComponent {
  render() {
    return <Message negative>{ this.props.children }</Message>;
  }
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Error;
