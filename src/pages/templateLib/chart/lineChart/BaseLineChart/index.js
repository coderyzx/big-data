import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Layout } from 'antd';
import Mirror from '../../../../editor/mirror';

const { Content } = Layout;

class BaseLineChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content style={{ padding: '0 50px', background: '#fff' }}>
        <Mirror/>
        <ReactECharts
            ref={e => {
              this.echarts_react = e;
            }}

            option = {{
              title: {
                text: '基础折线图',
              },
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                  type: 'value',
              },
              series: [{
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line',
              }],
            }}
          />
      </Content>
    )
  }
}

export default BaseLineChart;
