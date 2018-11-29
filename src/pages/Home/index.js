import React, { Component } from 'react';
import { Layout } from 'antd';
import Banner from '../../components/Banner';
import ToolList from '../../components/ToolList';
import styles from './styles/index.module.less';

const { Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Content className={styles.gallery}>
          <ToolList />
        </Content>
      </div>
    );
  }
}

export default Home;
