import React, { PureComponent } from 'react';

import loader from '../../images/loader.gif';

class Loader extends PureComponent {
  render() {
    return this.props.loading && <div><img src={loader} width="100"/></div>;
  }
}

Loader.propTypes = {
  loading: React.PropTypes.bool.isRequired,
}

export default Loader;
