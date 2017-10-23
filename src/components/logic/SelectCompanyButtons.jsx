import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Container } from 'semantic-ui-react'
import ReactGA from 'react-ga'

import { chooseCompany } from '@redux/actions'
import { companies } from '@config'

class SelectCompanyButtons extends PureComponent {
  constructor (props) {
    super(props)
    this.selectCompany = this.selectCompany.bind(this)
  }

  selectCompany (company) {
    return () => {
      if (this.props.selectedCompany !== company) {
        this.props.chooseCompany(company)
        ReactGA.event({
          category: 'Forms',
          action: 'Select Company',
          label: company.name,
        })
      }
    }
  }

  render () {
    return <Container>
      <Button active={this.props.selectedCompany === companies.THEODO_UK} onClick={this.selectCompany(companies.THEODO_UK)} >Theodo UK</Button>
      <Button active={this.props.selectedCompany === companies.THEODO_FR} onClick={this.selectCompany(companies.THEODO_FR)} >Theodo FR</Button>
      <Button active={this.props.selectedCompany === companies.FASTIT} onClick={this.selectCompany(companies.FASTIT)} >FastIT</Button>
      <Button active={this.props.selectedCompany === companies.BAM} onClick={this.selectCompany(companies.BAM)} >BAM</Button>
      <Button active={this.props.selectedCompany === companies.SICARA} onClick={this.selectCompany(companies.SICARA)} >Sicara</Button>
    </Container>
  }
}

SelectCompanyButtons.propTypes = {
  chooseCompany: PropTypes.func.isRequired,
  selectedCompany: PropTypes.object
}

const mapStateToProps = ({ selectedCompany }) => ({
  selectedCompany
})

const mapDispatchToProps = {
  chooseCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCompanyButtons)
