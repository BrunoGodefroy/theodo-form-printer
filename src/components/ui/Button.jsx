import React, { PureComponent } from 'react';


class Button extends PureComponent {
  render() {
    return <button onClick={ this.props.onClick }>{ this.props.children }</button>;
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
}

export default Button;
