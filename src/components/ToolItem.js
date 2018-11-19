import React from 'react'
import { Card, Icon, Avatar } from 'antd';
import { Link } from "react-router-dom";
import styles from '../styles/components/ToolItem.module.less'
import logo from "../assets/logo.png";

const { Meta } = Card;

const ToolItem = ({ id, title, description }) => (
  <Link to={`/tool/${id}`}>
    <Card
      className={styles.toolitem}
      hoverable={true}
      bordered={false}
    >
      <Meta
        avatar={<Avatar src={logo} />}
        title={title}
        description={description}
        className={styles.meta}
      />
    </Card>
  </Link>
)

export default ToolItem