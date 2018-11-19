import React, { Component } from 'react'
import libs from '../libs'

class ToolDetail extends Component {
  render() {
    const { match } = this.props
    const id = match.params.id
    const tool = libs[id]
    const { name: name, author: author, component: ToolComponent } = tool
    return (
      <div>
        <h1>{name}</h1>
        <h3>{author}</h3>
        <ToolComponent />
      </div>
    )
  }
}

export default ToolDetail