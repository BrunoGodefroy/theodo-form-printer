import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Label } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';
import { companies } from '../../redux/actions';

class ListForms extends PureComponent {
  render() {
    const yesOfCourse = this.props.questions.reduce((yes ,question) => {
      if (question.questionSlug === 'recommendation') {
        yes = question.answers[0]
      }
      return yes
    }, 'croute')

    const panels = this.props.forms.map(form =>{

      let label;

      if (parseInt(form.speed[0]) + parseInt(form.colaboration[0]) >= 8 && form.recommendation === yesOfCourse) {
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
        content: <ProjectForm form={ form } questions={ this.props.questions } company={ this.props.company } />,
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
  questions: PropTypes.array.isRequired,
  company: PropTypes.string.isRequired,
}

export default ListForms;
