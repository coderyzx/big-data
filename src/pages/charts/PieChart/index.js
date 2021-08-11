import React from 'react';
// import lineSimple from '../img/line-simple.png';
// import lineSmooth from '../img/line-smooth.png';
// import areaSimple from '../img/area-simple.png';
// import areaStack from '../img/area-stack.png';

import styles from '../chart.less'

class PieChart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ margin: '30px 15px 30px 15px' }}>
        <div>
          <h3 id="chart-type-line" className={styles.chartTypeHead}>折线图<span>line</span></h3>
          <div style={{ marginRight: '-15px', marginLeft: '-15px' }}>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-simple.webp?_v_=1627897138964"
                  // data-src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1627897138964"
                  // data-was-processed="true"
                  />
                  <h4 className={styles.title}>基础折线图</h4>
                  <h5 className={styles.subTitle}>Basic Line Chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-borderRadius.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>基础平滑折线图</h4>
                  <h5 className={styles.subTitle}>Smoothed Line Chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-custom.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>大数据量面积图</h4>
                  <h5 className={styles.subTitle}>Large scale area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
            <div className={styles.colItem}>
              <div className={styles.listLtem}>
                <a target="_blank" href="./editor.html?c=line-simple">
                  <img
                  src="https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/pie-roseType-simple.webp?_v_=1627897138964"
                  />
                  <h4 className={styles.title}>堆叠面积图</h4>
                  <h5 className={styles.subTitle}>Stacked area chart</h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PieChart;
