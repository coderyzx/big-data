import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'

const { Sider } = Layout;
const { SubMenu } = Menu;
@connect(({ chartModel }) => (
  {
    chartMenu: chartModel.chartMenu,
  }),
)
class TempLib extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chartModel/getChartMenu',
      payload: {},
    });
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            background: '#fff',
            left: 0,
          }}>
          <Menu
            mode="inline"
            style={{ height: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys = {['sub1']}
          >
            {
              this.chartMenu.map(item => (
                item.child.length ?
                  <SubMenu
                  key={item.subkey}
                  title={
                    <span>
                      <Icon type={item.iconType} />
                      <span>{item.listName}</span>
                    </span>
                  }
                  >
                    {
                    item.child.map(child => (
                      <Menu.Item key={child.key} >
                        <Link to={child.path}>
                          <Icon type={child.iconType} />
                          <span>{child.listName}</span>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                :
                  <Menu.Item key={item.subkey} >
                    <Link to={item.path} >
                      <Icon type={item.iconType} />
                      <span>{item.listName}</span>
                    </Link>
                  </Menu.Item>
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
export default TempLib;
