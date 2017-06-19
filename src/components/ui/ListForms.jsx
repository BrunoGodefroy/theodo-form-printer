import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

class ListForms extends PureComponent {
  render() {
    if (Object.keys(this.props.forms).length > 0) {
      return <List relaxed divided>
        { Object.keys(this.props.forms).map(project =>
          <List.Item key={ `key-${project}` } target="_blank" href={ this.props.forms[project] }>
            <List.Icon name="file text outline" />
            <List.Content>
              { project }
            </List.Content>
          </List.Item>
        ) }
      </List>;
    } else {
      return <p>To load the latest form, please click on "update the latest forms"</p>;
    }
  }
}

ListForms.propTypes = {
  forms: PropTypes.object.isRequired,
}

export default ListForms;
