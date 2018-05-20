import React, { PureComponent } from 'react'
import ReactMarkdown from 'react-markdown'
import ProfilePicture from 'components/user/ProfilePicture/'
import CommentEdit from 'components/comments/CommentEdit/'

import './CommentsSection.css'

class CommentsList extends PureComponent {
  render () {
    const { comments, onNewCommentEdit, onNewCommentSubmit } = this.props
    return (
      <div className="comments-list">
        <h2>Responses</h2>
        <CommentEdit
          className="new-comment"
          onCommentEdit={onNewCommentEdit}
          onSubmit={onNewCommentSubmit}
        />
        {
          (comments && comments.length > 0)
            ? comments.map(this.renderComment)
            : null
        }
      </div>
    )
  }
  renderComment = comment => (
    <div className="comment" key={comment.id}>
      <div className="commenter">
        <ProfilePicture name={comment.name} />
        <strong className="commenter-name">{comment.name}</strong>
      </div>
      <ReactMarkdown
        className="comment-description"
        source={comment.content}
      />
    </div>
  )
}

export default CommentsList
