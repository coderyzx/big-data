import React from 'react';
import { Layout } from 'antd';
import styles from './wellcome.less'

const { Footer } = Layout;
class Wellcome extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
    }

    render () {
      return (
        <>
          <Layout className ={styles.Wellcome} style={{ minHeight: 'calc(100vh - 67px)' }}>
            <h2 onClick={() => { this.sendMsg() }} >
              欢迎访问大数据管理平台-BDMP
            </h2>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>UIH ©2021 Created by UIH-BDMP</Footer>
        </>
      )
    }
}

export default Wellcome;
