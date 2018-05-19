import React, { Component } from 'react'
import Profile from './components/Profile/'
import PathInfo from './components/PathInfo/'
import Timeline from './components/Timeline/'
import './PathDetail.css'


class PathDetail extends Component {
  render(){
    return (
      <div className="scene-path-detail">
        <div className="path-summary">
          <Profile className="profile" />
          <PathInfo className="path-info" />
        </div>
        <Timeline />
      </div>
    )
  }
}

export default PathDetail