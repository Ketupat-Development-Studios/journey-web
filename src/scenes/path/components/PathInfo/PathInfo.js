import React, { PureComponent } from 'react'
import classnames from 'classnames'
import Tag from '../Tag/'
import LikeButton from '../LikeButton/'

import './PathInfo.css'

class PathInfo extends PureComponent {
  constructor(){
    super()
    this.state = {
      path: {
        title: 'Becoming a baking maestro',
        summary: 'A year ago, I didn\'t even know how to operate an oven. This is the result of months of research on the internet, reading recipe books, talking to various expert bakers and baking a lot of cakes.',
        tags: ['baking', 'cake', 'pandan']
      }
    }
  }
  render(){
    const { path } = this.state
    const { className } = this.props
    return (
      <div className={classnames('path-info', className)}>
        <h1 className="path-title">{path.title}</h1>
        <span className="path-summary">{path.summary}</span>
        <div className="bottom">
          <div className="tags">
            { path.tags.map(tag => (<Tag tag={tag} key={tag} />)) }
          </div>
          <LikeButton className="like-button" />
        </div>
      </div>
    )
  }
}

export default PathInfo
