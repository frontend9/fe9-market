import React, { Component } from 'react'

class ToolDetail extends Component {
  render() {
    const { match } = this.props
    return (
      <div>detail {match.params.id} </div>
    )
  }
}

export default ToolDetail