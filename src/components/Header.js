import React, { Component } from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Header.module.less'
import logo from '../assets/logo.png'

const { Header } = Layout

class HeaderCustom extends Component {
  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.layoutContainer}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logoLink}>
              <img className={styles.logoImage} src={logo} alt="logo" />
            </Link>
          </div>
          <h2 className={styles.title}>前端九部工具市场</h2>
        </div>
      </Header>
    )
  }
}

export default HeaderCustom