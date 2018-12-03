/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from "antd";
import styles from './styles/index.module.less'

const { Footer } = Layout
function CustomeFooter(props) {
  return <Footer className={styles.footer}>Copyright © 2018 frontend9</Footer>;
}

Footer.propTypes = {};

export default CustomeFooter;
