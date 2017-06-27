import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Label } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';

class ListForms extends PureComponent {
  render() {
    const panels = this.props.forms.map(form =>{

      let label;

      if (parseInt(form.speed[0]) + parseInt(form.colaboration[0]) > 8 && form.recommendation === 'Yes, absolutely') {
        if (parseInt(form.speed[0]) + parseInt(form.colaboration[0]) == 10){
          label = <Label color="green" className="pinned">WOW!</Label>;
        } else {
          label = <Label color="olive" className="pinned">Success</Label>;
        }
      }
      else {
        label = <Label color="red" className="pinned">Red bucket</Label>;
      }

      return {
        title: <span>{`${form.project} - Sprint ${form.sprint}`} {label}</span>,
        content: <ProjectForm form={ form } />,
        key: `${form.project} - Sprint ${form.sprint}`,
      }
    });

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
