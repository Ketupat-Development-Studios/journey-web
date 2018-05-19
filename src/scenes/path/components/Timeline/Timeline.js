import React, { PureComponent } from 'react'
import { Timeline as EventTimeline } from 'react-event-timeline'
import PrimaryButton from 'components/buttons/PrimaryButton/'
import Step from '../Step/'

import './Timeline.css'

class Timeline extends PureComponent {
  constructor () {
    super()
    this.state = {
      activeEvent: null
    }
  }
  render () {
    const { steps } = this.props
    return (
      <div className="timeline">
        <EventTimeline style={{fontSize: '100%', width: '100%'}}>
          {
            steps.map(this.renderTimelineEvent)
          }
        </EventTimeline>
        <PrimaryButton className="new-step" onClick={this.newStep}>
          <span>Add a new step</span>
        </PrimaryButton>
      </div>
    )
  }
  renderTimelineEvent = (event, index) => {
    const { activeEvent } = this.state
    return (
      <Step
        key={event.id}
        id={index}
        step={event}
        activeEvent={activeEvent}
        toggleEvent={this.toggleTimelineEvent}
      />
    )
  }
  toggleTimelineEvent = (index) => {
    const { activeEvent } = this.state
    if (activeEvent === index) {
      this.setState({ activeEvent: null })
    } else {
      this.setState({ activeEvent: index })
    }
  }
  newStep = () => {
    const { pathId } = this.props
    window.location.href = `/path/${pathId}/step/new`
  }
}

export default Timeline
