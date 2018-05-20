import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PathDetail from './scenes/path/PathDetail/'
import StepEdit from './scenes/step/StepEdit/'
import ProfileDetail from './scenes/profile/ProfileDetail'
import Explore from './scenes/explore/Explore'

// HERE IS YOUR SAMPLE PATH
import Sample from './scenes/sample/Sample'

const AppRouter = () => (
  <Router>
    <div>
      <div className="navbar">
        <img src="" />
      </div>
      <Route exact path="/" component={Explore} />
      <Route path="/profile/:id" component={ProfileDetail} />
      <Route exact path="/path/:pathId" component={PathDetail} />
      <Route path="/path/:pathId/step/new" component={StepEdit} />
      <Route path="/step/:stepId/edit" component={StepEdit} />

      <Route path="/sample" component={Sample} />
    </div>
  </Router>
)

export default AppRouter
