import React, { PureComponent } from 'react'
import classnames from 'classnames'

import './PrimaryButton.css'

class PrimaryButton extends PureComponent {
  render () {
    const { children, className } = this.props
    return (
      <div className={classnames('primary-button', className)}>
        {children}
      </div>
    )
  }
}

export default PrimaryButton
