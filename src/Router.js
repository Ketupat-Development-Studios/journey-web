import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import PathDetail from './scenes/path/PathDetail/'
import StepEdit from './scenes/step/StepEdit/'
import ProfileDetail from './scenes/profile/ProfileDetail'
import Explore from './scenes/explore/Explore'

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Explore} />
      <Route path="/profile/:id" component={ProfileDetail} />
      <Route exact path="/path/:pathId" component={PathDetail} />
      <Route path="/path/:pathId/step/new" component={StepEdit} />
      <Route path="/step/:stepId/edit" component={StepEdit} />
    </div>
  </Router>
)

export default AppRouter
