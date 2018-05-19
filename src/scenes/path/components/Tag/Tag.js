import React, { PureComponent } from 'react'
import './Tag.css'

class Tag extends PureComponent {
  render(){
    const { tag } = this.props
    return (
      <div className="tag">
        {tag}
      </div>
    )
  }
}

export default Tag
