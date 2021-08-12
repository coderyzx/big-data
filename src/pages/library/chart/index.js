import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'
import './chart.less';
import '../index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Library extends React.Component {
  componentList = [
    {
      key: '1',
      iconType: 'pie-chart',
      path: '/library/component',
      listName: '图表组件列表',
      children: [
        {
          subKey: '1',
          childName: '折线图',
          path: '/library/component/line',
          iconType: 'pie-chart',
        },
        {
          subKey: '2',
          childName: '饼图',
          path: '/library/component/pie',
          iconType: 'pie-chart',
        },
        {
          subKey: '3',
          childName: '雷达图',
          path: '/library/component/radar',
          iconType: 'pie-chart',
        },
        {
          subKey: '4',
          childName: '柱状图',
          path: '/library/component/bar',
          iconType: 'pie-chart',
        },
      ],
    },
    {
      key: '2',
      iconType: 'pie-chart',
      path: '/library/type',
      listName: '图表类型列表',
      children: [],
    },
    {
      key: '3',
      iconType: 'pie-chart',
      path: '/library/filter',
      listName: '过滤组件列表',
      children: [],
    },
    {
      key: '4',
      iconType: 'pie-chart',
      path: '/library/text',
      listName: '文本组件列表',
      children: [],
    },
    {
      key: '5',
      iconType: 'pie-chart',
      path: '/library/photo',
      listName: '图片组件列表',
      children: [],
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
              this.componentList.map(item => (
                <SubMenu
                key={item.key}
                title={
                  <span>
                    <Icon type={item.iconType} />
                    <span>{item.listName}</span>
                  </span>
                }
                >
                  <Menu.Item key={item.children.subKey} >
                    <Link to={item.children.path}>
                      <Icon type={item.children.iconType} />
                      <span>{item.children.childName}</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>
              ))
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
export default Library;
