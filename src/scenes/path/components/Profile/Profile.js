import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './Profile.css'

class Profile extends PureComponent {
  constructor(){
    super()
    this.state = {
      user: {
        profile_picture: 'https://pbs.twimg.com/profile_images/994722216741781504/3JaM54xk_400x400.jpg',
        name: 'Kevin Cheng'
      }
    }
  }
  render(){
    const { user, className } = this.state
    return (
      <div className={classnames('profile', className)}>
        <img className="profile-picture" src={user.profile_picture} alt="profile"/>
        <span className="user-name">{user.name}</span>
      </div>
    )
  }
}

export default Profile
