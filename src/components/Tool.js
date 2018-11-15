import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import styles from '../styles/components/Tool.module.less'

const { Meta } = Card;

const Tool = ({ title, description }) => (
  <Card
    className={styles.tool}
    hoverable={true}
    bordered={false}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={title}
      description={description}
      className={styles.meta}
    />
  </Card>
)

export default Tool