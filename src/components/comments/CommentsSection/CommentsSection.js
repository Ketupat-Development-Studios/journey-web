import React, { PureComponent } from 'react'
import ProfilePicture from 'components/user/ProfilePicture/'
import CommentEdit from 'components/comments/CommentEdit/'
import './CommentsSection.css'

class CommentsList extends PureComponent {
  render () {
    const { comments, onNewCommentEdit, onNewCommentSubmit } = this.props
    if (!comments || !Array.isArray(comments) || comments.length === 0) {
      return null
    }
    return (
      <div className="comments-list">
        <h2>Responses</h2>
        <CommentEdit
          className="new-comment"
          onCommentEdit={onNewCommentEdit}
          onSubmit={onNewCommentSubmit}
        />
        {
          comments.map(this.renderComment)
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
      <span className="comment-text">{comment.content}</span>
    </div>
  )
}

export default CommentsList
