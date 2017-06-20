import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button, Icon } from 'semantic-ui-react'


class ProjectForm extends PureComponent {
  constructor(props) {
    super(props);
    this.printForm = this.printForm.bind(this)
  }

  printForm(event, data) {
    event.preventDefault();
    print();
  }

  render() {
    return <Form>
      <Button className="no-print" onClick={ this.printForm } icon>
        <Icon name='print' />
      </Button>
      <Header as="h2">Theodo Project Form</Header>
      <Segment vertical>
        <Header as="h3">How do you feel about the speed of the team?</Header>
        <Form.Radio label='0 - Not good at all' checked={ this.props.form.speed ==='0 - Not good at all' } />
        <Form.Radio label='1 - Not good' checked={ this.props.form.speed ==='1 - Not good' } />
        <Form.Radio label='2 - Average' checked={ this.props.form.speed ==='2 - Average' } />
        <Form.Radio label='3 - Good' checked={ this.props.form.speed ==='3 - Good' } />
        <Form.Radio label='4 - Very Good' checked={ this.props.form.speed ==='4 - Very Good' } />
        <Form.Radio label='5 - Excellent' checked={ this.props.form.speed ==='5 - Excellent' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">How do you feel about the quality of the collaboration with Theodo?</Header>
        <Form.Radio label='0 - Not good at all' checked={ this.props.form.colaboration ==='0 - Not good at all' } />
        <Form.Radio label='1 - Not good' checked={ this.props.form.colaboration ==='1 - Not good' } />
        <Form.Radio label='2 - Average' checked={ this.props.form.colaboration ==='2 - Average' } />
        <Form.Radio label='3 - Good' checked={ this.props.form.colaboration ==='3 - Good' } />
        <Form.Radio label='4 - Very Good' checked={ this.props.form.colaboration ==='4 - Very Good' } />
        <Form.Radio label='5 - Excellent' checked={ this.props.form.colaboration ==='5 - Excellent' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">What is the main priority the team should concentrate on to improve the score?</Header>
        { this.props.form['client-voice'].split(/\n/).map((string, index) => <p key={`client-voice-${index}`}>{ string }</p>) }
      </Segment>
      <Segment vertical>
        <Header as="h3">Should you have a magic wand, what is "the" thing you would change at Theodo?</Header>
        { this.props.form['magic-wand'].split(/\n/).map((string, index) => <p key={`magix-wand-${index}`}>{ string }</p>) }
      </Segment>
      <Segment vertical>
        <Header as="h3">Would you recommend Theodo?</Header>
        <Form.Radio label='Yes, absolutely' checked={ this.props.form.recommendation === 'Yes, absolutely' } />
        <Form.Radio label='Yes' checked={ this.props.form.recommendation === 'Yes' } />
        <Form.Radio label='Not really' checked={ this.props.form.recommendation === 'Not really' } />
        <Form.Radio label='Not at all' checked={ this.props.form.recommendation === 'Not at all' } />
      </Segment>
      <Segment vertical>
        <Header as="h3">Would you like to have a sales appointment with your Project Director this week?</Header>
        <Form.Radio label='Yes' checked={ this.props.form['sales-appointement'] === 'Yes' } />
        <Form.Radio label='No' checked={ this.props.form['sales-appointement'] === 'No' } />
      </Segment>
    </Form>;
  }
}

ProjectForm.propTypes = {
  form: PropTypes.object.isRequired,
}

export default ProjectForm;
