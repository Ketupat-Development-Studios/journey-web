import React, { PureComponent } from 'react'
import ReactMde from 'react-mde'
import * as Showdown from 'showdown'
import PrimaryButton from 'components/buttons/PrimaryButton/'

import 'react-mde/lib/styles/css/react-mde-all.css'
import './StepEdit.css'

class StepEdit extends PureComponent {
  constructor () {
    super()
    this.state = {
      path: null
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
    const { path } = this.state
    return (
      <div className="scene-path-edit">
        <ReactMde
          layout="horizontal"
          onChange={this.onEdit}
          editorState={path}
          generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
        />
        <PrimaryButton onClick={this.savePath}>
          <span>SAVE</span>
        </PrimaryButton>
      </div>
    )
  }
  onEdit = (path) => {
    this.setState({ path })
  }
  savePath = () => {
    const { match: { params: { stepId } } } = this.props
    if (stepId) {
      // create
    } else {
      // update
    }
  }
}

export default StepEdit
