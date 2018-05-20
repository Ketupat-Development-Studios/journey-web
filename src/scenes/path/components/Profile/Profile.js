import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './Profile.css'

class Profile extends PureComponent {
  render () {
    const { author, className } = this.props
    return (
      <div className={classnames('profile', className)}>
        <div
          className="profile-picture"
          style={{
            backgroundImage: `url(${author.profile_picture})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
        <span className="user-name">{author.name}</span>
      </div>
    )
  }
}

export default Profile
