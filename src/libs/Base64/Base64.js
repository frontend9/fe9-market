import React, { Component } from 'react'
import { Row, Col, Button, Input } from 'antd'
import styles from './Base64.module.less'

const { TextArea } = Input

class Base64 extends Component {
  handleDecode = () => {
    this.encodeInput.textAreaRef.value = 
      Buffer.from(this.decodeInput.textAreaRef.value, 'base64').toString('ascii')
  }

  handleEncode = () => {
    this.decodeInput.textAreaRef.value = 
      Buffer.from(this.encodeInput.textAreaRef.value).toString('base64')
  }

  render() {
    return (
      <div className={styles.container}>
        <Row type="flex" justify="center" align="middle">
          <Col xs={8} sm={9} md={8} lg={8} xl={8} xxl={8}>
            <TextArea placeholder="请输入要编码的内容" rows={10} className={styles.textarea} ref={(ref) => this.encodeInput = ref} />
          </Col>
          <Col xs={{ span: 8, offset: 0 }} 
               sm={{ span: 6, offset: 0 }}
               md={{ span: 5, offset: 0 }}
               lg={{ span: 5, offset: 0 }}
               xl={{ span: 4, offset: 0 }}
               xxl={{ span: 4, offset: 0 }}>
            <Button className={styles.decode} onClick={this.handleDecode}>&#60;&#45; 解码</Button>
            <Button className={styles.encode} onClick={this.handleEncode}>编码 &#45;&#62;</Button>
          </Col>
          <Col xs={8} sm={9} md={8} lg={8} xl={8} xxl={8}>
            <TextArea placeholder="请输入要解码的内容" rows={10} className={styles.textarea} ref={(ref) => this.decodeInput = ref} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Base64