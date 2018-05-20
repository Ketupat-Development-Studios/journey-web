import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import ApiManager from 'utils/ApiManager'
import CommentsList from 'components/CommentsList'

class StepDetail extends Component {
  constructor () {
    super()
    this.state = {
      step: {},
      isLoading: true
    }
  }
  componentDidMount () {
    this.fetchStep()
  }
  render () {
    const { step: { content, comments }, isLoading } = this.state
    if (isLoading) {
      return (
        <span>Loading...</span>
      )
    }
    return (
      <div class="scene-step-detail">
        <ReactMarkdown
          className="step-description"
          source={content}
        />
        <CommentsList comments={comments} />
      </div>
    )
  }
  fetchStep = async () => {
    const { match: { params: { id: stepId } } } = this.props
    this.setState({ isLoading: true })
    try {
      const step = await ApiManager.getStepById(stepId)
      console.log(step)
      this.setState({ step })
    } catch (error) {
      console.error(error)
    }
    this.setState({ isLoading: false })
  }
}

export default StepDetail
