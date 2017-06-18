import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListForms extends PureComponent {
  render() {
    return <ul>
      { Object.keys(this.props.forms).map(project =>
        <li key={ `key-${project}` }>
          <a target="_blank" href={ this.props.forms[project] }>{ project }</a>
        </li>
      ) }
    </ul>;
  }
}

ListForms.propTypes = {
  forms: PropTypes.object.isRequired,
}

export default ListForms;
