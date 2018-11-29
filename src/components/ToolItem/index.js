/**
 *
 * ToolItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles/index.module.less'
import logo from '../../assets/logo.png';

const { Meta } = Card;

function ToolItem({ id, name, description, author }) {
  return (
    <Link to={`/tool/${id}`}>
      <Card className={styles.toolitem} hoverable={true} bordered={false}>
        <Meta
          avatar={<Avatar src={logo} />}
          title={name}
          description={description}
          className={styles.meta}
        />
      </Card>
    </Link>
  );
}

ToolItem.propTypes = {};

export default ToolItem;
