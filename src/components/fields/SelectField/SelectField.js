import React, { PureComponent } from 'react'
import classnames from 'classnames'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import './SelectField.css'

class SelectField extends PureComponent {
  render () {
    const { placeholder, options, value, onChange, className } = this.props
    return (
      <Dropdown
        placeholder={placeholder}
        className={classnames('select-field', className)}
        value={value}
        onChange={onChange}
        options={options}
      />
    )
  }
}

export default SelectField
