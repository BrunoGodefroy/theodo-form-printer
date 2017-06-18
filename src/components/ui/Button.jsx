import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Button extends PureComponent {
  render() {
    return <button onClick={ this.props.onClick }>{ this.props.children }</button>;
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button;
