import React from 'react'
import { Layout } from "antd";
import styles from '../styles/components/Header.module.less'

const { Header } = Layout

const HeaderCustom = ({}) => (
  <Header className={styles.header}>header</Header>
)

export default HeaderCustom