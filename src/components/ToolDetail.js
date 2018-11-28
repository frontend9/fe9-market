import React, { Component } from 'react'
import libs from '../libs'
import styles from '../styles/components/ToolDetail.module.less'

class ToolDetail extends Component {
  render() {
    const { match } = this.props
    const id = match.params.id
    const tool = libs[id]
    const { name, author, component: ToolComponent } = tool
    return (
      <div className={styles.toolDetail}>
        <div className={styles.toolMeta}>
          <h1 className={styles.toolName}>{name}</h1>
          <span className={styles.toolAuthor}>by @{author}</span>
        </div>
        <ToolComponent />
      </div>
    )
  }
}

export default ToolDetail