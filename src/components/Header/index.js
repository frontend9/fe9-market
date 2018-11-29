/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styles from './styles/index.module.less';
import logo from '../../assets/logo.png'

const { Header } = Layout

function CustomHeader(props) {
  return (
    <Header className={styles.header}>
    <div className={styles.layoutContainer}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logoImage} src={logo} alt="logo" />
        </Link>
      </div>
      <h2 className={styles.title}>前端九部工具库</h2>
    </div>
  </Header>
  );
}

Header.propTypes = {};

export default CustomHeader
