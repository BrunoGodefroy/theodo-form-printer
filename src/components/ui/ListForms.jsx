import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Label } from 'semantic-ui-react';
import ProjectForm from './ProjectForm';
import { companies } from '../../redux/actions';

class ListForms extends PureComponent {
  render() {
    const recommendationQuestion = this.props.questions.find(question => question.questionSlug === 'recommendation')
    const yesOfCourse = recommendationQuestion ? recommendationQuestion.answers[0] : ''

    const panels = this.props.forms.map((form, index) =>{

      let label;
      switch (form.satisfaction) {
        case 'Waouh':
          label = <Label color="green" className="pinned">WOW!</Label>;
          break;
        case 'OK':
          label = <Label color="olive" className="pinned">Success</Label>;
          break;
        case 'KO':
          label = <Label color="red" className="pinned">Red bucket</Label>;
          break;
        default:
          label = <Label color="pink" className="pinned">error</Label>;
      }

      var formTitle = form.sprint ? `${form.project} - Sprint ${form.sprint}` : `${form.project}`
      return {
        title: <span>{formTitle} {label}</span>,
        content: <ProjectForm form={ form } questions={ this.props.questions } company={ this.props.company } />,
        key: `${form.project} - Sprint ${form.sprint} - ${index}`,
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
