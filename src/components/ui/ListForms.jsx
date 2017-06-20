import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, Accordion } from 'semantic-ui-react';

class ListForms extends PureComponent {
  render() {
    const panels = this.props.forms.map(form =>({
      title: form.project,
      content: form.project,
    }));

    if (this.props.forms.length > 0) {
      return <Accordion panels={ panels } styled />
    } else {
      return <p>To load the latest form, please click on "update the latest forms"</p>;
    }
  }
}

ListForms.propTypes = {
  forms: PropTypes.array.isRequired,
}

export default ListForms;
