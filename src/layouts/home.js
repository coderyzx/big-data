import React from 'react';
import { Layout, Menu, Icon, Tooltip, Button } from 'antd';
import Link from 'umi/link';
import backgroundImg from '../assets/logo.png';
import styles from './home.less';

const { Header } = Layout;

// eslint-disable-next-line react/prefer-stateless-function
class BasicLayout extends React.Component {
  render() {
    const text = {
      text1: <span>个人中心</span>,
      text2: <span>主页</span>,
      text3: <span>退出</span>,
    };
    return (
      <Layout>
        <Header
        style={{
          position: 'fixed', zIndex: 1000, width: '100%', background: '#fff', padding: 0, boxShadow: ' 0 0 20px rgb(0 0 0 / 20%)',
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
            <Menu.Item key="1" ><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/charts">图表管理</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/charts">表单管理</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/charts">字段库管理</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/charts">预览</Link></Menu.Item>
            <Link to="/login" >
              <Tooltip placement="bottom" title={text.text3} >
                <Button style={{ float: 'right', margin: '17px 30px 17px 0' }}>
                  <Icon type="login" />
                  exit
                </Button>
              </Tooltip>
            </Link>
            <Link to="/home" >
              <Tooltip placement="bottom" title={text.text2} >
                <Button style={{ float: 'right', margin: '17px 10px 17px 0' }}>
                  <Icon type="home" />
                  home
                </Button>
              </Tooltip>
            </Link>
            <Link to="/user" >
              <Tooltip placement="bottom" title={text.text1} >
                <Button style={{ float: 'right', margin: '17px 10px 17px 0' }}>
                  <Icon type="user" />
                  user
                </Button>
              </Tooltip>
            </Link>
          </Menu>
        </Header>
        <Layout style={{ marginTop: 67 }}>
          { this.props.children }
        </Layout>
      </Layout>
    );
  }
}
export default BasicLayout;
