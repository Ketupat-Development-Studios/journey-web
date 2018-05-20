import React, { PureComponent } from 'react'
import classnames from 'classnames'
import MultilineTextField from 'components/fields/MultilineTextField'
import PrimaryButton from 'components/buttons/PrimaryButton/'

import './CommentEdit.css'

class CommentEdit extends PureComponent {
  constructor () {
    super()
    this.state = {
      isFocused: false
    }
  }
  render () {
    const { value, onCommentEdit, className, onSubmit } = this.props
    const { isFocused } = this.state
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
            onBlur: this.onBlur
          }}
        />
        {
          isFocused
            ? <PrimaryButton className="new-comment" onSubmit={onSubmit}>
              <span>Post</span>
            </PrimaryButton>
            : null
        }
      </div>
    )
  }
  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })
}

export default CommentEdit
