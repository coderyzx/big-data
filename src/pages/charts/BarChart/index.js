import React from 'react';
// import styles from './index.less'

class BarChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="example-list-item">
        <a target="_blank" href="./editor.html?c=line-simple"
        className="example-link"
        >
          <img
          // class="chart-area ec-shot-loaded"
          src="../../assets/line-simple.png"
          // data-src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1627897138964"
          // data-was-processed="true"
          />
          <h4 className="example-title">基础折线图</h4>
          <h5 className="example-subtitle">Bar Chart</h5>
        </a>
      </div>
    )
  }
}

export default BarChart;
