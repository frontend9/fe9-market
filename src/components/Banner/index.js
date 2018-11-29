/**
 *
 * Banner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styles from './styles/index.module.less';

function Banner(props) {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>前端九部工具库</h1>
      <p className={styles.slogan}>发现有价值的前端工具</p>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
