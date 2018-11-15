import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import styles from '../styles/components/Tool.module.less'

const { Meta } = Card;

const Tool = ({ title }) => (
  <Card
    className={styles.tool}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={title}
      description="This is the description"
    />
  </Card>
)

export default Tool