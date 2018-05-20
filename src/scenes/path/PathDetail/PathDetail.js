import React, { Component } from 'react'
import qs from 'query-string'
import ApiManager from 'utils/ApiManager'

import Profile from 'scenes/path/components/Profile/'
import PathInfo from 'scenes/path/components/PathInfo/'
import Timeline from 'scenes/path/components/Timeline/'
import './PathDetail.css'

class PathDetail extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      path: {},
      steps: []
    }
  }
  componentDidMount () {
    this.fetchPath()
  }
  render () {
    const { isLoading, path } = this.state
    if (isLoading) {
      return (<span>Loading...</span>)
    }

    const { id, title, summary, tags, steps } = path
    const pathInfo = { id, title, summary, tags }

    return (
      <div className="scene-path-detail">
        <div className="path-summary">
          <Profile
            className="profile"
            author={path.author}
          />
          <PathInfo
            className="path-info"
            path={pathInfo}
            onMerge={this.onMerge}
          />
        </div>
        <Timeline
          pathId={path.id}
          steps={steps}
        />
      </div>
    )
  }
  fetchPath = async () => {
    const { match: { params: { pathId } } } = this.props

    let path = {}
    try {
      path = await ApiManager.getPathById(pathId)
    } catch (error) {
      console.error(error)
    }
    this.setState({ path, isLoading: false })
  }
  onMerge = ({ value: pathId }) => {
    const curUrl = window.location.href
    const urlParams = { mde: `Merged from [${curUrl}](${curUrl})` }
    window.location.href = `/path/${pathId}/step/new?${qs.stringify(urlParams)}`
  }
}

export default PathDetail
