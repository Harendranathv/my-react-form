import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './components/highlight.css'

// demos
import MyFormBasicDemo from './components/MyFormBasicDemo'
import MyFormDemo from './components/MyFormDemo'
import WithMyFormDemo from './components/WithMyFormDemo'

class Example extends Component {
  static propTypes = {}

  state = {
    expanded: null
  }

  handleExpandClick = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    })
  }

  render () {
    const { expanded } = this.state
    return (
      <Fragment>
        <ExpansionPanel expanded={expanded === 'MyFormBasicDemo'} onChange={this.handleExpandClick('MyFormBasicDemo')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{'<MyForm render={form => form} />'}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ flexGrow: 1, background: '#555', padding: 15, overFlow: 'hidden' }}>
              <MyFormBasicDemo />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'MyFormDemo'} onChange={this.handleExpandClick('MyFormDemo')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{'<MyForm>{props => props}</MyFormDemo>'}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ flexGrow: 1, background: '#555', padding: 15, overFlow: 'hidden' }}>
              <MyFormDemo />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'WithMyFormDemo'} onChange={this.handleExpandClick('WithMyFormDemo')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{'withMyForm(configs)(MyComponent)'}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div style={{ flexGrow: 1, background: '#555', padding: 15, overFlow: 'hidden' }}>
              <WithMyFormDemo />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Fragment>
    )
  }
}

render(
  <Example />,
  document.getElementById('root')
)
