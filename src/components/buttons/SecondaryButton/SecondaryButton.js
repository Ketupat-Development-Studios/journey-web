import React, { PureComponent } from 'react'
import classnames from 'classnames'

import './SecondaryButton.css'

class SecondaryButton extends PureComponent {
  render () {
    const { children, className } = this.props
    return (
      <div className={classnames('secondary-button', className)}>
        {children}
      </div>
    )
  }
}

export default SecondaryButton
