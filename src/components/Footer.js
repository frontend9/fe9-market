import React, { Component } from 'react'
import { Layout } from "antd";
import styles from '../styles/components/Footer.module.less'

const { Footer } = Layout

class FooterCustom extends Component {
  render() {
    return (
      <Footer className={styles.footer}>Copyright © 2018 frontend9</Footer>
    )
  }
}

export default FooterCustom