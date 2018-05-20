import React, { PureComponent } from 'react'
import Ionicon from 'react-ionicons'
import ReactMarkdown from 'react-markdown'
import { TimelineEvent } from 'react-event-timeline'
import ApiManager from 'utils/ApiManager'
import CommentsSection from 'components/comments/CommentsSection/'

import './Step.css'

class Step extends PureComponent {
  constructor () {
    super()
    this.state = {
      newComment: '',
      comments: [],
      commentsLoading: true
    }
  }
  componentDidMount () {
    this.fetchComments()
  }
  render () {
    const { id, activeEvent, step } = this.props
    const { newComment, comments, commentsLoading } = this.state
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
              ? (
                <div
                  className="timeline-event-content"
                  onClick={this.stopPropogation}
                  onDoubleClick={this.editStep}
                >
                  <ReactMarkdown
                    className="step-description"
                    source={step.content}
                  />
                  {
                    commentsLoading
                      ? <span>Loading...</span>
                      : <CommentsSection
                        comments={comments}
                        onNewCommentEdit={this.onNewCommentEdit}
                        onNewCommentSubmit={this.onNewCommentSubmit}
                        newComment={newComment}
                      />
                  }
                </div>
              )
              : null
          }
        </TimelineEvent>
      </div>
    )
  }
  fetchComments = async () => {
    const { step } = this.props
    let comments
    try {
      comments = await ApiManager.getCommentsByStep(step.id)
    } catch (error) {
      console.error(error)
    }
    this.setState({ comments, commentsLoading: false })
  }
  onNewCommentEdit = newComment => this.setState({ newComment })
  onNewCommentSubmit = async () => {
    const { step } = this.props
    const { newComment } = this.state
    const commentData = {
      stepId: step.id,
      content: newComment,
      name: 'Ai Suan Yew'
    }
    try {
      await ApiManager.createComment(commentData)
    } catch (error) {
      console.error(error)
    }
  }
  editStep = () => {
    const { step } = this.props
    window.location.href = `/step/${step.id}/edit`
  }
  toggleTimelineEvent = (event) => {
    const { id, toggleEvent } = this.props
    toggleEvent(id)
  }
  stopPropogation = event => {
    event.stopPropagation()
  }
}

export default Step
