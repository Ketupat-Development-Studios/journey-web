import React, { PureComponent } from 'react'

class CommentsList extends PureComponent {
  render(){
    const { comments } = this.props
    if(!comments || !Array.isArray(comments) || comments.length === 0){
      return null
    }
    return (
      <div className="comments-list">
        <h2>Responses</h2>
        {
          comments.map(this.renderComment)
        }
      </div>
    )
  }
  renderComment = comment => (
    <div className="comment" key={comment.id}>
      <div className="commenter">
        <span>{comment.name}</span>
      </div>
      <span className="comment-text">{comment.content}</span>
    </div>
  )
}

export default CommentsList
