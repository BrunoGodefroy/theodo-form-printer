import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Segment } from 'semantic-ui-react';

class ListForms extends PureComponent {
  render() {
    return <Segment textAlign="left">
      <List relaxed divided>
        { Object.keys(this.props.forms).map(project =>
          <List.Item key={ `key-${project}` } target="_blank" href={ this.props.forms[project] }>
            <List.Icon name="file text outline" />
            <List.Content>
              { project }
            </List.Content>
          </List.Item>
        ) }
      </List>
    </Segment>;
  }
}

ListForms.propTypes = {
  forms: PropTypes.object.isRequired,
}

export default ListForms;
