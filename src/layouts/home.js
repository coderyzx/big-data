import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import backgroundImg from '../assets/logo.png';
import styles from './home.less';
import SearchInput from './searchInput';

const { Header, Content, Sider, Footer } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    theme: 'dark',
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
          <div className={styles.logo} >
            <div className={styles.pic} ><img src={backgroundImg} alt="" /></div>
            <div className={this.state.theme === 'dark' ? styles.text : styles.textDark} >
              <div className={styles.subtitle}>大数据管理平台</div>
              BDMP
            </div>
          </div>
          <br/>
          <br/>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              通用字段库
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="laptop" />
              私有字段库
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="appstore" />
              自定义字段库
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1" style={{ marginLeft: 100 }}>字段库管理</Menu.Item>
              <Menu.Item key="2">表单管理</Menu.Item>
              <Menu.Item key="3">页面管理</Menu.Item>
              <Menu.Item key="4">form关联页面管理</Menu.Item>
              <Menu.Item key="5">预览</Menu.Item>
              <SearchInput />
              <Icon type="user" style={{ marginLeft: 220, fontSize: 22 }}/>
              <Icon type="home" style={{ marginLeft: 25, fontSize: 22 }}/>
              <Link to="/login" ><Icon type="login" style={{ marginLeft: 25, fontSize: 22 }}/></Link>
            </Menu>
          </Header>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
          </Content>
          <Footer style={{ textAlign: 'center' }}>UIH ©2021 Created by UIH-BDMP</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
