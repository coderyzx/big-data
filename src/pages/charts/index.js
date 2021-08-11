import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link'
import { connect } from 'dva'
import './chart.less';
import '../index.less';

const { Sider } = Layout;

@connect(({ chartModel }) => (
  {
    chartList: chartModel.chartList,
  }),
)
class Chart extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     collapsed: false,
  //   };
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chartModel/getChart',
      payload: {},
    }).then(() => {
      // eslint-disable-next-line no-console
      console.log('图表加载完毕');
    });
  }

  // onCollapse = collapsed => {
  //   this.setState({ collapsed });
  // }

  // handleClick = e => {
  //   retrurn {
  //   }
  // }


  render() {
    const { children, chartList } = this.props;
    // console.log(chartList);
    return (
      <>
        <Sider width={200}
          style={{ background: '#fff', zIndex: 99, minHeight: 'cal(100%)' }}>
          <Menu
            mode="inline"
            style={{ height: '100%' }}
            defaultSelectedKeys={['1']}
          >
            {
              chartList.map(item => (
                <Menu.Item key={item.key} >
                  <Link to={item.path}>
                    <Icon type={item.iconType} />
                    <span>{item.chartName}</span>
                  </Link>
                </Menu.Item>
              ))
            }
            {/* <Menu.Item key="1">
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
              <Link to="/charts/chart-type-pie">
                <Icon type="pie-chart" />
                <span>饼图</span>
              </Link>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout style={{ padding: 14, marginLeft: 220 }}>
          {children }
        </Layout>
      </>
    )
  }
}
export default Chart;
