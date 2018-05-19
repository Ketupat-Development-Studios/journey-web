import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PathDetail from './scenes/path/PathDetail'
import ProfileDetail from './scenes/profile/ProfileDetail'
import Explore from './scenes/explore/Explore'

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Explore</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Explore}/>
      <Route path="/profile/:id" component={ProfileDetail}/>
      <Route path="/path/:id" component={PathDetail}/>
    </div>
  </Router>
)

export default AppRouter
