import React from 'react'
import { List } from "antd";
import styles from '../styles/components/ToolList.module.less'
import Tool from './Tool'

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const ToolList = ({}) => (
  <List className={styles.toollist}
    grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 3, xxl: 4 }}
    dataSource={data}
    renderItem={item => (
      <List.Item className={styles.toollistItem}>
        <Tool title={item.title}></Tool>
      </List.Item>
    )}
  />
)

export default ToolList