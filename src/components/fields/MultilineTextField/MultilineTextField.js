import React, { PureComponent } from 'react'
import classnames from 'classnames'
import './MultilineTextField.css'

class MultilineTextField extends PureComponent {
  render () {
    const { label, placeholder, value, className, textareaProps } = this.props
    return (
      <div className={classnames('multiline-text-field', className)}>
        <label>{label}</label>
        <textarea
          {...textareaProps}
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

export default MultilineTextField
