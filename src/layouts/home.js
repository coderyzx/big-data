import React from 'react';
import { Layout, Menu, Icon, Tooltip, Button } from 'antd';
import Link from 'umi/link';
import backgroundImg from '../assets/logo.png';
import styles from './home.less';
import Wellcome from '../pages/Wellcome';
import Sider from '../pages/sider';

const { Header, Content, Footer } = Layout;

// eslint-disable-next-line react/prefer-stateless-function
class BasicLayout extends React.Component {
  render() {
    const text = {
      text1: <span>个人中心</span>,
      text2: <span>主页</span>,
      text3: <span>退出</span>,
    };
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Header
        style={{
           position: 'fixed', zIndex: 1, width: '100%', background: '#fff', padding: 0, boxShadow: ' 0 0 20px rgb(0 0 0 / 20%)',
        }}>
          <div className={styles.logo}>
            <a href="https://echarts.apache.org/zh/index.html">
              <img src={backgroundImg} alt="BDMP logo" />
              <div className={styles.title}>
                BDMP
              </div>
            </a>
          </div>
          <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" >首页</Menu.Item>
            <Menu.Item key="2">字段库管理</Menu.Item>
            <Menu.Item key="3">表单管理</Menu.Item>
            <Menu.Item key="4">页面管理</Menu.Item>
            <Menu.Item key="5">form关联页面管理</Menu.Item>
            <Menu.Item key="6">预览</Menu.Item>
            <Link to="/user" >
              <Tooltip placement="bottom" title={text.text1} >
                <Button style={{ marginLeft: 180 }}>
                  <Icon type="user" />
                  user
                </Button>
              </Tooltip>
            </Link>
            <Link to="/home" >
              <Tooltip placement="bottom" title={text.text2} >
                <Button style={{ marginLeft: 10 }}>
                  <Icon type="home" />
                  home
                </Button>
              </Tooltip>
            </Link>
            <Link to="/login" >
              <Tooltip placement="bottom" title={text.text3} >
                <Button style={{ marginLeft: 10 }}>
                  <Icon type="login" />
                  exit
                </Button>
              </Tooltip>
            </Link>
          </Menu>
        </Header>
        <Layout>
          <Sider/>
          <Layout>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Wellcome/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>UIH ©2021 Created by UIH-BDMP</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
