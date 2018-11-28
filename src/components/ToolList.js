import React, { Component } from 'react'
import { List } from "antd";
import styles from '../styles/components/ToolList.module.less'
import ToolItem from './ToolItem'
import toolData from '../libs'

const data = toolData.map((item, index) => {
  return {
    ...item,
    id: index,
  }
})

class ToolList extends Component {
  render() {
    return (
      <List className={styles.toollist}
        grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 3 }}
        dataSource={data}
        renderItem={item => (
          <List.Item className={styles.toollistItem} key={item.id}>
            <ToolItem {...item}></ToolItem>
          </List.Item>
        )}
      />
    )
  }
}

export default ToolList