import React, { PureComponent } from 'react'
import PrimaryButton from 'components/buttons/PrimaryButton/'
import ProfilePicture from 'components/user/ProfilePicture/'
import './CommentsList.css'

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
        <PrimaryButton className="new-comment">
          <span>Write a response</span>
        </PrimaryButton>
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
