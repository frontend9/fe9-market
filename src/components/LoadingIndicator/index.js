/**
 *
 * LoadingIndicator
 *
 */

import React from 'react';
import styles from './styles/index.module.less';

// import PropTypes from 'prop-types';

function LoadingIndicator(props) {
  return (
    <div className={styles.loadingBox}>
      正在加载...
    </div>
  );
}

LoadingIndicator.propTypes = {};

export default LoadingIndicator
