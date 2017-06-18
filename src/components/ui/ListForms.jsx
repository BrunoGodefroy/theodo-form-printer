import React, { PureComponent } from 'react';

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
  forms: React.PropTypes.object.isRequired,
}

export default ListForms;
