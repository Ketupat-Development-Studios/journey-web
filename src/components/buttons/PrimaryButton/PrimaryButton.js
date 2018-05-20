import React, { PureComponent } from 'react'
import classnames from 'classnames'

import './PrimaryButton.css'

class PrimaryButton extends PureComponent {
  render () {
    const { children, className, onClick } = this.props
    return (
      <div className={classnames('primary-button', className)} onClick={onClick}>
        {children}
      </div>
    )
  }
}

export default PrimaryButton
