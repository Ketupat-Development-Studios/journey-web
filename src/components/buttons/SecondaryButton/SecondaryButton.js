import React, { PureComponent } from 'react'
import classnames from 'classnames'

import './SecondaryButton.css'

class SecondaryButton extends PureComponent {
  render () {
    const { children, className, onClick } = this.props
    return (
      <div className={classnames('secondary-button', className)} onClick={onClick}>
        {children}
      </div>
    )
  }
}

export default SecondaryButton
