import React, { PureComponent } from 'react'
import { Timeline as EventTimeline } from 'react-event-timeline'
import Step from '../Step/'

import './Timeline.css'

class Timeline extends PureComponent {
  constructor(){
    super()
    this.state = {
      activeEvent: null,
      events: [
        {
          title: 'Banana Bread',
          createdAt: '1st Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.',
          comments: [
            { "id": 1, "content":"Wow what an amazing guide!", "name": "Guan Tan" },
            { "id": 2, "content":"This is really helpful", "name": "Guan Lim" },
            { "id": 3, "content":"Thanks for making this", "name": "Guan Khoo" }
          ]
        },
        {
          title: 'Marble Cake',
          createdAt: '14th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
        {
          title: 'Banana Cake',
          createdAt: '27th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
        {
          title: 'Marble Cake',
          createdAt: '14th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
        {
          title: 'Banana Cake',
          createdAt: '27th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
        {
          title: 'Marble Cake',
          createdAt: '14th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
        {
          title: 'Banana Cake',
          createdAt: '27th Jan',
          content: 'This is also a fool-proof banana bread recipe and a great way to get started with baking. Really. Just throw some things together in a bowl, whisk it and bake it to get this awesome loaf full of yummy banana flavour.'
        },
      ]
    }
  }
  render(){
    const { events } = this.state
    return (
      <div className="timeline">
        <EventTimeline style={{fontSize: '100%', width: '100%'}}>
          {
            events.map(this.renderTimelineEvent)
          }
        </EventTimeline>
      </div>
    )
  }
  renderTimelineEvent = (event, index) => {
    const { activeEvent } = this.state
    return (
      <Step
        id={index}
        step={event}
        activeEvent={activeEvent}
        toggleEvent={this.toggleTimelineEvent}
      />
    )
  }
  toggleTimelineEvent = (index) => {
    const { activeEvent } = this.state
    if(activeEvent === index){
      this.setState({ activeEvent: null })
    } else {
      this.setState({ activeEvent: index })
    }
  }
}

export default Timeline
