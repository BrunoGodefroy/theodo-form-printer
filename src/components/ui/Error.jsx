import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Error extends PureComponent {
  render() {
    return <pre>{ this.props.message }</pre>;
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Error;
