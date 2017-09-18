import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Accordion, Label, Container } from 'semantic-ui-react'

import { ProjectForm } from '@components/ui'
import formStatus from '@config/formStatus'

class ListForms extends PureComponent {
  render () {
    const panels = this.props.forms.map((form, index) => {
      let label
      switch (form.status) {
        case formStatus.WOW:
          label = <Label color='green' className='pinned'>WOW!</Label>
          break
        case formStatus.OK:
          label = <Label color='olive' className='pinned'>Success</Label>
          break
        case formStatus.KO:
          label = <Label color='red' className='pinned'>Red bucket</Label>
          break
        default:
          label = <Label color='pink' className='pinned'>error</Label>
      }

      const formTitle = form.sprint ? `${form.project} - Sprint ${form.sprint}` : `${form.project}`
      return {
        title: <span>{formTitle} {label}</span>,
        content: <ProjectForm form={form} questions={this.props.questions} company={this.props.selectedCompany.name} />,
        key: `${form.project} - Sprint ${form.sprint} - ${index}`
      }
    })

    if (this.props.forms.length > 0) {
      return <Container className={`company-${this.props.selectedCompany.name}`} >
        <Container style={{ margin: '10px', display: 'flex', flexDirection: 'column' }} className='no-print'>
          <Container textAlign='center'>
            <Label color='green' >WOW: {this.props.numberOfWahou} / {this.props.forms.length} - {Math.round(this.props.numberOfWahou * 100 / this.props.forms.length)}%</Label>
            <Label color='olive' >Success: {this.props.numberOfOK} / {this.props.forms.length} - {Math.round(this.props.numberOfOK * 100 / this.props.forms.length)}%</Label>
            <Label color='red' >Red Bucket: {this.props.numberOfKO} / {this.props.forms.length} - {Math.round(this.props.numberOfKO * 100 / this.props.forms.length)}%</Label>
          </Container>
        </Container>
        <Container style={{ display: 'flex', justifyContent: 'center' }} textAlign='left'>
          <Accordion panels={panels} styled />
        </Container>
      </Container>
    } else {
      return <Container as='p'>To load the latest form, please click on "update the latest forms"</Container>
    }
  }
}

ListForms.propTypes = {
  forms: PropTypes.array.isRequired,
  questions: PropTypes.array.isRequired,
  selectedCompany: PropTypes.object.isRequired,
  numberOfWahou: PropTypes.number.isRequired,
  numberOfOK: PropTypes.number.isRequired,
  numberOfKO: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = ({
  loading,
  forms,
  questions,
  selectedCompany,
  numberOfWahou,
  numberOfOK,
  numberOfKO
}) => ({
  loading,
  forms,
  questions,
  selectedCompany,
  numberOfWahou,
  numberOfOK,
  numberOfKO
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ListForms)
