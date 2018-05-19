import React, { PureComponent } from 'react'
import Ionicon from 'react-ionicons'
import classnames from 'classnames'

import './LikeButton.css'

class LikeButton extends PureComponent {
  constructor(){
    super()
    this.state = {
      isLiked: false
    }
  }
  render(){
    const { className } = this.props
    const { isLiked } = this.state
    return (
      <div
        className={classnames(
          'like-button',
          isLiked ? 'liked' : '',
          className
        )}
        onClick={this.toggleLike}
      >
        <Ionicon icon="md-heart" color={classnames(isLiked ? '#fff' : '#000')} />
      </div>
    )
  }
  toggleLike = () => {
    const { isLiked } = this.state
    this.setState({ isLiked: !isLiked })
  }
}

export default LikeButton
