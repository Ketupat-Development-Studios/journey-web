import React, { PureComponent } from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import moment from 'moment'

import ApiManager from 'utils/ApiManager'

import PrimaryButton from 'components/buttons/PrimaryButton/'
import TextField from 'components/fields/TextField'

import 'react-mde/lib/styles/css/react-mde-all.css'
import './StepEdit.css'

class StepEdit extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '',
      mde: { markdown: '' },
      isLoading: false,
      step: {}
    }
    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true})
  }
  componentDidMount () {
    const { match: { params: { stepId } } } = this.props
    if (stepId) {
      this.fetchStep()
    } else {
      // do nothing
    }
  }
  render () {
    const { mde, title, isLoading } = this.state
    if (isLoading) {
      return <span>Loading...</span>
    }
    return (
      <div className="scene-path-edit">
        <TextField
          className="title-input"
          placeholder="Title"
          onTextChange={this.onTitleChange}
          value={title}
        />
        <ReactMde
          className="path-editor"
          layout="horizontal"
          onChange={this.onEdit}
          editorState={mde}
          generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
        />
        <div className="action-bar">
          <PrimaryButton className="save-step" onClick={this.savePath}>
            <span>SAVE</span>
          </PrimaryButton>
          <PrimaryButton className="help" onClick={this.sosPath}>
            <span>I NEED HELP</span>
          </PrimaryButton>
        </div>
      </div>
    )
  }
  onEdit = (mde) => {
    this.setState({ mde })
  }
  onTitleChange = title => this.setState({ title })
  fetchStep = async () => {
    this.setState({ isLoading: true })
    const { match: { params: { stepId } } } = this.props
    let step
    try {
      step = await ApiManager.getStepById(stepId)
    } catch (error) {
      console.error(error)
    }
    this.setState({
      title: step.title,
      mde: {
        markdown: step.content
      },
      step,
      pathId: step.pathId,
      isLoading: false
    })
  }
  savePath = async () => {
    const { match: { params: { stepId } } } = this.props
    const { title, mde } = this.state
    if (stepId) {
      // update
      const { pathId } = this.state
      const stepData = {
        id: stepId,
        title,
        content: mde.markdown
      }
      try {
        await ApiManager.updateStep(stepData)
      } catch (error) {
        console.error(error)
      }
      window.location.href = `/path/${pathId}`
    } else {
      // create
      const { match: { params: { pathId } } } = this.props
      const stepData = {
        title,
        content: mde.markdown,
        date: moment().format('Do MMM'),
        comments: [],
        pathId: Number.parseInt(pathId, 10)
      }
      try {
        await ApiManager.createStep(stepData)
      } catch (error) {
        console.error(error)
      }
      window.location.href = `/path/${pathId}`
    }
  }
  sosPath = async () => {
    const { match: { params: { stepId } } } = this.props
    const { pathId, step } = this.state
    try {
      const stepData = {
        id: stepId,
        needHelp: !step.needHelp
      }
      await ApiManager.updateStep(stepData)
    } catch (error) {
      console.error(error)
    }
    window.location.href = `/path/${pathId}`
  }
}

export default StepEdit
