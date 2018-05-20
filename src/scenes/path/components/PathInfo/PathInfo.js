import React, { PureComponent } from 'react'
import classnames from 'classnames'
import SelectField from 'components/fields/SelectField'
import Tag from '../Tag/'
import LikeButton from '../LikeButton/'

import './PathInfo.css'

class PathInfo extends PureComponent {
  constructor () {
    super()
    this.state = {
      path: {
        title: 'Becoming a baking maestro',
        summary: 'A year ago, I didn\'t even know how to operate an oven. This is the result of months of research on the internet, reading recipe books, talking to various expert bakers and baking a lot of cakes.',
        tags: ['baking', 'cake', 'pandan']
      }
    }
  }
  render () {
    const { className, path, onMerge } = this.props
    return (
      <div className={classnames('path-info', className)}>
        <h1 className="path-title">{path.title}</h1>
        <span className="path-summary">{path.summary}</span>
        <div className="bottom">
          <div className="tags">
            { path.tags.map(tag => (<Tag tag={tag} key={tag} />)) }
          </div>
          <LikeButton className="like-button" />
          <SelectField
            className="merge"
            placeholder="Merge with other path"
            onChange={onMerge}
            options={[
              // { label: 'Learning Python Without Any Programming Experience', value: 'python' },
              { label: 'Learning Data Science', value: '3' }
              // { label: 'My Adventures in SCRUM', value: 'scrum' },
              // { label: 'Serverless Deployment', value: 'serverless' }
            ]}
          />
        </div>
      </div>
    )
  }
}

export default PathInfo
