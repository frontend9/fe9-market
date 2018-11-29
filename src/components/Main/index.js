/**
 *
 * Main
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import { Layout } from "antd";
import styles from './styles/index.module.less'
import Home from '../../pages/Home/Loadable';
import ToolDetail from "../../pages/ToolDetail/Loadable";

function Main(props) {
  return (
    <Layout className={styles.main}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tool/:id" component={ToolDetail} />
      <Route component={Home} />
    </Switch>
  </Layout>
  );
}

Main.propTypes = {};

export default Main
