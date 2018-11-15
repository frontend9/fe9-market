import React from 'react'
import { Layout } from "antd";
import styles from '../styles/components/Main.module.less'
import Banner from './Banner'
import ToolList from './ToolList'

const { Content } = Layout

const Main = ({}) => (
  <Layout className={styles.main}>
    <Banner></Banner>  
    <Content className={styles.content}>
      <ToolList></ToolList>      
    </Content>
  </Layout>
)

export default Main