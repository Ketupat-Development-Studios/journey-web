import React, { PureComponent } from 'react'
import Avatar from 'avatar-initials'

import './ProfilePicture.css'

const suffix = '_profile_picture'

class ProfilePicture extends PureComponent {
  componentDidMount(){
    const { name } = this.props
    const initials = name.split(' ').map(s => s[0].toUpperCase()).join('')
    new Avatar(document.getElementById(name+suffix), {
      'useGravatar': false, initials,
      initial_fg: '#000000',
      initial_bg: '#ffffff',
      initial_font_family: 'Open Sans'
    })
  }
  render(){
    const { name } = this.props
    return (
      <img id={name+suffix} src='' alt={name} className="profile-picture" />
    )
  }
}

export default ProfilePicture

