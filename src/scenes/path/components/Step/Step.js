import React, { PureComponent } from 'react'
import Ionicon from 'react-ionicons'
import ReactMarkdown from 'react-markdown'
import { TimelineEvent } from 'react-event-timeline'
import ApiManager from 'utils/ApiManager'
import SelectField from 'components/fields/SelectField'
import SecondaryButton from 'components/buttons/SecondaryButton/'
import CommentsSection from 'components/comments/CommentsSection/'

import './Step.css'

const getRandomElement = myArray => myArray[Math.floor(Math.random() * myArray.length)]
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
          title={(
            <div className="event-title">
              <span>{step.title}</span>
              <SelectField
                className="fork"
                placeholder="Fork this step"
                options={[
                  // { label: 'Learning Python Without Any Programming Experience', value: 'python' },
                  { label: 'Visualising Data with Matplotlib', value: 'matplotlib' },
                  // { label: 'My Adventures in SCRUM', value: 'scrum' },
                  // { label: 'Serverless Deployment', value: 'serverless' }
                ]}
              />
            </div>
          )}
          createdAt={step.date}
          icon={this.renderIcon()}
        >
          {
            activeEvent === id
              ? (
                <div
                  className="timeline-event-content"
                  onDoubleClick={this.editStep}
                  onClick={this.stopPropogation}
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
    this.setState({ comments: comments.reverse(), commentsLoading: false })
  }
  renderIcon = () => {
    const { step } = this.props
    const { needHelp, isMerged } = step
    if (needHelp) {
      return <Ionicon icon="ios-alert" color='#c0392b' />
    }
    if (isMerged) {
      return <Ionicon className="fork" icon="ios-git-merge" fontSize="20px" />
    }
    return null
  }
  onNewCommentEdit = newComment => this.setState({ newComment })
  onNewCommentSubmit = async () => {
    const { step } = this.props
    const { newComment } = this.state
    const commentData = {
      stepId: step.id,
      content: newComment,
      name: getRandomElement(['Charles Tan', 'Wu Guanqun', 'Nicholas Lui', 'Sarah Lee', 'Joyce Er', 'Sim Er Ann'])
    }
    try {
      await ApiManager.createComment(commentData)
      this.setState({ newComment: '' })
      await this.fetchComments()
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
