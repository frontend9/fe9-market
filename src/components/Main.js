import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from "antd";
import styles from '../styles/components/Main.module.less'
import Banner from './Banner'
import ToolList from './ToolList'

const { Content } = Layout

class Home extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>  
        <Content className={styles.content}>
          <ToolList></ToolList>      
        </Content>
      </div>
    )
  }
}

class ToolDetail extends Component {
  render() {
    const { match } = this.props
    return (
      <div>detail {match.params.id} </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <Layout className={styles.main}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tool/:id" component={ToolDetail} />
          {/* <Route component={Home} /> */}
        </Switch>
      </Layout>
    )
  }
}

export default Main