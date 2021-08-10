import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class BasicSider extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }

  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
      width={200}
      >
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
    )
  }
}
export default BasicSider;
