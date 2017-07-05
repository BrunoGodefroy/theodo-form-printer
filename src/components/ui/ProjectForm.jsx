import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Segment, Header, Button, Icon } from 'semantic-ui-react'
import { companies } from '../../redux/actions';

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
    switch(this.props.company) {
      case companies.FASTIT:
      case companies.THEODO_FR:
        return <Form>
          <Button className="no-print" onClick={ this.printForm } icon>
            <Icon name='print' />
          </Button>
          <Segment vertical>
            <Header as="h3">Quelle est votre appréciation sur la vitesse d'avancement de l'équipe Theodo ?</Header>
            <Form.Radio label='5 - Excellente' checked={ this.props.form.speed ==='5 - Excellente' } />
            <Form.Radio label='4 - Très bonne' checked={ this.props.form.speed ==='4 - Très bonne' } />
            <Form.Radio label='3 - Bonne' checked={ this.props.form.speed ==='3 - Bonne' } />
            <Form.Radio label='2 - Moyenne' checked={ this.props.form.speed ==='2 - Moyenne' } />
            <Form.Radio label='1 - Insuffisante' checked={ this.props.form.speed ==='1 - Insuffisante' } />
            <Form.Radio label='0 - Très insuffisante' checked={ this.props.form.speed ==='0 - Très insuffisante' } />
          </Segment>
          <Segment vertical>
            <Header as="h3">Quelle est votre appréciation sur la qualité de l'accompagnement Theodo ?</Header>
            <Form.Radio label='5 - Excellente' checked={ this.props.form.colaboration ==='5 - Excellente' } />
            <Form.Radio label='4 - Très bonne' checked={ this.props.form.colaboration ==='4 - Très bonne' } />
            <Form.Radio label='3 - Bonne' checked={ this.props.form.colaboration ==='3 - Bonne' } />
            <Form.Radio label='2 - Moyenne' checked={ this.props.form.colaboration ==='2 - Moyenne' } />
            <Form.Radio label='1 - Insuffisante' checked={ this.props.form.colaboration ==='1 - Insuffisante' } />
            <Form.Radio label='0 - Très insuffisante' checked={ this.props.form.colaboration ==='0 - Très insuffisante' } />
          </Segment>
          <Segment vertical>
            <Header as="h3">Quel changement/amélioration prioritaire pourrait vous amener à améliorer votre appréciation ?</Header>
            { this.props.form['client-voice'].split(/\n/).map((string, index) => <p key={`client-voice-${index}`}>{ string }</p>) }
          </Segment>
          <Segment vertical>
            <Header as="h3">Si vous aviez une baguette magique. quelle est "la" chose que vous changeriez chez Theodo ?</Header>
            { this.props.form['magic-wand'].split(/\n/).map((string, index) => <p key={`magix-wand-${index}`}>{ string }</p>) }
          </Segment>
          <Segment vertical>
            <Header as="h3">Seriez-vous prêt à recommander Theodo ?</Header>
            <Form.Radio label='Oui bien sûr' checked={ this.props.form.recommendation === 'Oui bien sûr' } />
            <Form.Radio label='Oui' checked={ this.props.form.recommendation === 'Oui' } />
            <Form.Radio label='Pas vraiment' checked={ this.props.form.recommendation === 'Pas vraiment' } />
            <Form.Radio label='Pas du tout' checked={ this.props.form.recommendation === 'Pas du tout' } />
          </Segment>
          <Segment vertical>
            <Header as="h3">Souhaitez-vous faire un point commercial avec Theodo dans la semaine à venir ?</Header>
            <Form.Radio label='Oui' checked={ this.props.form['sales-appointement'] === 'Oui' } />
            <Form.Radio label='Non, ce n’est pas nécessaire pour l’instant' checked={ this.props.form['sales-appointement'] === 'Non, ce n’est pas nécessaire pour l’instant' } />
          </Segment>
        </Form>;
      default:
        return <Form>
          <Button className="no-print" onClick={ this.printForm } icon>
            <Icon name='print' />
          </Button>
          <Segment vertical>
            <Header as="h3">How do you feel about the speed of the team?</Header>
            <Form.Radio label='5 - Excellent' checked={ this.props.form.speed ==='5 - Excellent' } />
            <Form.Radio label='4 - Very Good' checked={ this.props.form.speed ==='4 - Very Good' } />
            <Form.Radio label='3 - Good' checked={ this.props.form.speed ==='3 - Good' } />
            <Form.Radio label='2 - Average' checked={ this.props.form.speed ==='2 - Average' } />
            <Form.Radio label='1 - Not good' checked={ this.props.form.speed ==='1 - Not good' } />
            <Form.Radio label='0 - Not good at all' checked={ this.props.form.speed ==='0 - Not good at all' } />
          </Segment>
          <Segment vertical>
            <Header as="h3">How do you feel about the quality of the collaboration with Theodo?</Header>
            <Form.Radio label='5 - Excellent' checked={ this.props.form.colaboration ==='5 - Excellent' } />
            <Form.Radio label='4 - Very Good' checked={ this.props.form.colaboration ==='4 - Very Good' } />
            <Form.Radio label='3 - Good' checked={ this.props.form.colaboration ==='3 - Good' } />
            <Form.Radio label='2 - Average' checked={ this.props.form.colaboration ==='2 - Average' } />
            <Form.Radio label='1 - Not good' checked={ this.props.form.colaboration ==='1 - Not good' } />
            <Form.Radio label='0 - Not good at all' checked={ this.props.form.colaboration ==='0 - Not good at all' } />
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
}

ProjectForm.propTypes = {
  form: PropTypes.object.isRequired,
  company: PropTypes.string.isRequired,
}

export default ProjectForm;
