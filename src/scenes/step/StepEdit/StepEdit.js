import React, { PureComponent } from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import moment from 'moment'

import ApiManager from 'utils/ApiManager'

import PrimaryButton from 'components/buttons/PrimaryButton/'

import 'react-mde/lib/styles/css/react-mde-all.css'
import './StepEdit.css'

class StepEdit extends PureComponent {
  constructor () {
    super()
    this.state = {
      mde: null
    }
    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true})
  }
  componentDidMount () {
    const { match: { params: { stepId } } } = this.props
    if (stepId) {
      // populate editor
    } else {
      // do nothing
    }
  }
  render () {
    const { mde } = this.state
    return (
      <div className="scene-path-edit">
        <ReactMde
          className="path-editor"
          layout="horizontal"
          onChange={this.onEdit}
          editorState={mde}
          generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
        />
        <PrimaryButton className="save-step" onClick={this.savePath}>
          <span>SAVE</span>
        </PrimaryButton>
      </div>
    )
  }
  onEdit = (mde) => {
    this.setState({ mde })
  }
  savePath = async () => {
    const { match: { params: { stepId, pathId } } } = this.props
    const { mde } = this.state
    if (stepId) {
      // update
    } else {
      // create
      const stepData = {
        title: 'Wow new step',
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
}

export default StepEdit
