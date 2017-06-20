import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';

class ListForms extends PureComponent {
  render() {
    const panels = this.props.forms.map(form =>({
      title: form.project,
      content: <ProjectForm form={ form } />,
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
