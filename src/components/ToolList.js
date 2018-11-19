import React, { Component } from 'react'
import { List } from "antd";
import styles from '../styles/components/ToolList.module.less'
import ToolItem from './ToolItem'

const data = [
  {
    id: 0,
    title: 'Base64 编解码',
    description: '提供对 Base 64 编码和解码的支持提供对 Base 64 编码和解码的支持提供对 Base 64 编码和解码的支持提供对 Base 64 编码和解码的支持',
  },
  {
    id: 1,
    title: 'Title 2',
    description: 'desc2',
  },
  {
    id: 2,
    title: 'Title 3',
    description: 'desc3',
  },
  {
    id: 3,
    title: 'Title 4',
    description: 'desc4',
  },
  {
    id: 4,
    title: 'Title 45',
    description: 'desc45',
  },
  {
    id: 5,
    title: 'Title 41',
    description: 'desc41',
  },
];

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