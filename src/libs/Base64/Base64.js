import React, { Component } from 'react'
import base64js from 'base64-js'
import { Row, Col, Button, Input } from 'antd'
import styles from './Base64.module.less'

const { TextArea } = Input

class Base64 extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Row type="flex" justify="center" align="middle">
          <Col xs={8} sm={9} md={8} lg={8} xl={8} xxl={8}>
            <TextArea rows={10} className={styles.textarea} />
          </Col>
          <Col xs={{ span: 8, offset: 0 }} 
               sm={{ span: 6, offset: 0 }}
               md={{ span: 5, offset: 0 }}
               lg={{ span: 5, offset: 0 }}
               xl={{ span: 4, offset: 0 }}
               xxl={{ span: 4, offset: 0 }}>
            <Button className={styles.encode}>&#60;&#45; encode</Button>
            <Button className={styles.decode}>decode &#45;&#62;</Button>
          </Col>
          <Col xs={8} sm={9} md={8} lg={8} xl={8} xxl={8}>
            <TextArea rows={10} className={styles.textarea} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Base64