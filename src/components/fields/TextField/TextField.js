import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './TextField.css'

class TextField extends PureComponent {
  render () {
    const { label, placeholder, value, className } = this.props
    return (
      <div className={classnames('text-field', className)}>
        <label>{label}</label>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
  onChange = (event) => {
    const { onTextChange } = this.props
    onTextChange(event.target.value)
  }
}

export default TextField
