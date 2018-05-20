import React, { PureComponent } from 'react'
import classnames from 'classnames'
import MultilineTextField from 'components/fields/MultilineTextField'

import './CommentEdit.css'

class CommentEdit extends PureComponent {
  constructor () {
    super()
    this.state = {
      isFocused: false
    }
  }
  render () {
    const { value, onCommentEdit, className } = this.props
    return (
      <div className={classnames('comment-edit', className)}>
        <MultilineTextField
          className="comment-text-field"
          placeholder="Write a response"
          value={value}
          onTextChange={onCommentEdit}
          textareaProps={{
            rows: 1,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown
          }}
        />
      </div>
    )
  }
  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })
  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const { onSubmit } = this.props
      event.preventDefault()
      event.stopPropagation()
      onSubmit()
    }
  }
}

export default CommentEdit
