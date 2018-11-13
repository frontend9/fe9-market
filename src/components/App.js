import React from 'react';
import styles from '../styles/App.module.less';

const App = ({ message }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>{message}</h1>
  </div>
);

export default App;