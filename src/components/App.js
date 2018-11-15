import React, { Component } from 'react';
import styles from '../styles/components/App.module.less';
import { Layout } from 'antd'
import Header from './Header';
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    )
  }
}

export default App;