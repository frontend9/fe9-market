import React, { Component } from 'react'
import { Layout } from "antd";
import Banner from './Banner'
import ToolList from './ToolList'
import styles from '../styles/components/Home.module.less'

const { Content } = Layout

class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>  
        <Content className={styles.gallery}>
          <ToolList></ToolList>      
        </Content>
      </div>
    )
  }
}

export default Home