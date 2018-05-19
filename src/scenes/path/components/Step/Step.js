import React, { PureComponent } from 'react'
import Ionicon from 'react-ionicons'
import { TimelineEvent } from 'react-event-timeline'
import CommentsList from '../CommentsList/'

import './Step.css'

class Step extends PureComponent {
  render () {
    const { id, activeEvent, step } = this.props
    return (
      <div className="timeline-event" onClick={this.toggleTimelineEvent}>
        <TimelineEvent
          title={step.title}
          createdAt={step.date}
          icon={(
            <Ionicon name="ios-star" />
          )}
        >
          {
            activeEvent === id
              ? <div className="timeline-event-content" onClick={this.stopPropogation}>
                {step.content}
                <CommentsList comments={step.comments} />
              </div>
              : null
          }
        </TimelineEvent>
      </div>
    )
  }
  toggleTimelineEvent = (event) => {
    const { id, toggleEvent } = this.props
    console.log(event)
    toggleEvent(id)
  }
  stopPropogation = event => {
    event.stopPropagation()
  }
}

export default Step
