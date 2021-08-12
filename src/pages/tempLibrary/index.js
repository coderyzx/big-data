import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'

const { Sider } = Layout;
const { SubMenu } = Menu;

class TempLibrary extends React.Component {
  componentList = [
    {
      key: '1',
      iconType: 'area-chart',
      // path: '/tempLibrary/chart',
      listName: '图表组件列表',
      child: [
        {
          subKey: '1',
          listName: '折线图',
          path: '/tempLibrary/chart/line',
          iconType: 'line-chart',
        },
        {
          subKey: '2',
          listName: '饼图',
          path: '/tempLibrary/chart/pie',
          iconType: 'pie-chart',
        },
        {
          subKey: '3',
          listName: '雷达图',
          path: '/tempLibrary/chart/radar',
          iconType: 'radar-chart',
        },
        {
          subKey: '4',
          listName: '柱状图',
          path: '/tempLibrary/chart/bar',
          iconType: 'bar-chart',
        },
      ],
    },
    {
      key: '2',
      iconType: 'form',
      path: '/tempLibrary/type',
      listName: '图表类型列表',
      child: [],
    },
    {
      key: '3',
      iconType: 'tool',
      path: '/tempLibrary/toolBar',
      listName: '工具栏列表',
      child: [],
    },
    {
      key: '4',
      iconType: 'file-text',
      path: '/tempLibrary/largeScreen',
      listName: '大屏配置',
      child: [],
    },
  ];

  render() {
    const { children } = this.props;
    return (
      <>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}>
          <Menu
            mode="inline"
            style={{ height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys = {['1']}
          >
            {
              this.componentList.map(item => {
                if (item.child.length) {
                  return (
                    <Menu.Item key={item.key} >
                      <Link to={item.path}>
                        <Icon type={item.iconType} />
                        <span>{item.listName}</span>
                      </Link>
                    </Menu.Item>
                  )
                }
                  return (
                    <SubMenu
                    key={item.key}
                    title={
                      <span>
                        <Icon type={item.iconType} />
                        <span>{item.listName}</span>
                      </span>
                    }
                    >
                      {/* item.child.map(i =>                  */}
                      <Menu.Item key={item.child.subKey} >
                        <Link to={item.child.path}>
                          <Icon type={item.child.iconType} />
                          <span>{item.child.childName}</span>
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                  )
              })
            }
          </Menu>
        </Sider>
        <Layout style={{ padding: 14, marginLeft: '200px', overflow: 'initial' }}>
          {children }
        </Layout>
      </>
    )
  }
}
export default TempLibrary;
