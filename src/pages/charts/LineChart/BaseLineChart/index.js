import React from 'react';
import ReactECharts from 'echarts-for-react';

// import styles from './index.less'

class LineChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
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
    )
  }
}

export default LineChart;
