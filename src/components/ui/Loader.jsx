import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Loader extends PureComponent {
  render() {
    return this.props.loading && <div><img src={loader} width="100"/></div>;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader;
