import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Form, Segment, Header, Button, Icon } from 'semantic-ui-react'

import { questionTypes } from '@config'

class ProjectForm extends PureComponent {
  constructor (props) {
    super(props)
    this.printForm = this.printForm.bind(this)
  }

  printForm (event, data) {
    event.preventDefault()
    window.print()
  }

  render () {
    return <Form>
      <Button className='no-print' onClick={this.printForm} icon>
        <Icon name='print' />
      </Button>
      { this.props.form.questions.map(question => {
        switch (question.type) {
          case questionTypes.MULTIPLE_CHOICE:
            return <Segment key={`segment-${question.slug}`} vertical>
              <Header as='h3'>{ question.label }</Header>
              { question.choices.map(choice => {
                return (<Form.Radio key={`${question.slug}-${choice.slug}`} label={choice.label} checked={question.answer === choice.label} />)
              }) }
            </Segment>
          default:
            return <Segment key={`segment-${question.slug}`} vertical>
              <Header as='h3'>{ question.label }</Header>
              { question.answer.split(/\n/).map((string, index) => <p key={`${question.questionSlug}-${index}`}>{ string }</p>) }
            </Segment>
        }
      })
      }
    </Form>
  }
}

ProjectForm.propTypes = {
  form: PropTypes.object.isRequired
}

export default ProjectForm
