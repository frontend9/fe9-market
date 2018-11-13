import React from 'react'
import { Layout } from "antd";
import styles from '../styles/components/Main.module.less'
import Banner from './Banner'

const { Content } = Layout

const Main = ({}) => (
  <Layout className={styles.main}>
    <Banner></Banner>  
    <Content>Content</Content>
  </Layout>
)

export default Main