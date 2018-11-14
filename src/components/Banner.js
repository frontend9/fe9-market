import React from 'react'
import styles from '../styles/components/Banner.module.less'

const Banner = ({}) => (
  <div className={styles.banner}>
    <h1 className={styles.title}>前端九部工具库</h1>
    <p className={styles.slogan}>发现有价值的前端工具</p>
  </div>
)

export default Banner