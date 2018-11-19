import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from "antd";
import styles from '../styles/components/Main.module.less'
import Home from './Home'
import ToolDetail from "./ToolDetail";

class Main extends Component {
  render() {
    return (
      <Layout className={styles.main}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tool/:id" component={ToolDetail} />
          <Route component={Home} />
        </Switch>
      </Layout>
    )
  }
}

export default Main