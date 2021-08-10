import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'

const { Sider } = Layout;


class BasicSider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  handleClick = e => {
    console.log('click ', e);
  };


  render() {
    return (
      <>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu
            mode="inline"
            style={{ minHeight: '100vh' }}
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">
              <Link to="/charts">
                <Icon type="pie-chart" />
                <span>折线图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/charts/chart-type-bar">
                <Icon type="pie-chart" />
                <span>柱状图</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/charts">
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          { this.props.children }
        </Layout>
      </>
    )
  }
}
export default BasicSider;
