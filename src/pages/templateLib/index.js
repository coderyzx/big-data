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
    const { chartMenu, children } = this.props;
    return (
      <>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            // background: '#fff',
            left: 0,
          }}>
          <Menu
            // theme='dark'
            mode="inline"
            style={{ height: '100%' }}
            // defaultSelectedKeys={['1']}
            defaultOpenKeys = {['sub1']}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="area-chart"/>
                  <span>图表组件列表</span>
                </span>
              }
              >
              {
                  chartMenu.map(item => (
                    <Menu.Item key={item.id}>
                      <Link to ={`/templateLib/chart/${item.path}`}>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                      </Link>
                    </Menu.Item>
                  ))
                }
            </SubMenu>
            <Menu.Item key="sub2">
              <Link to="/templateLib/chartType"><Icon type="form"/><span>图表类型列表</span></Link>
            </Menu.Item>
            <Menu.Item key="sub3">
              <Link to="/templateLib/toolBar"><Icon type="tool"/><span>工具栏列表</span></Link>
            </Menu.Item>
            <Menu.Item key="sub4">
              <Link to="/templateLib/largeScreen"><Icon type="desktop"/><span>大屏配置</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: 14, marginLeft: '200px', overflow: 'initial' }}>
          {children}
        </Layout>
      </>
    )
  }
}
export default TempLib;
