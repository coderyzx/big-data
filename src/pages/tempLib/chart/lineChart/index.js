import React from 'react';
import { connect } from 'dva'
import Link from 'umi/link';
import ReactECharts from 'echarts-for-react';
import styles from '../chart.less';

@connect(({ chartModel }) => (
  {
    lineChart: chartModel.lineChart,
  }),
)
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chartModel/getChartList',
      payload: {},
    }).then(() => {
      // eslint-disable-next-line no-console
      // console.log('图表加载完毕');
    });
  }

  render() {
    const { lineChart } = this.props;
    console.log(lineChart);
    return (
      <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
        <h3 className={styles.chartTypeHead}>{lineChart.lineChartName}</h3>
        {
            (lineChart.lineChartList || []).map(item => (
              <div key={item.id} style={{ marginRight: '-15px', marginLeft: '-15px' }}>
                <div className={styles.colItem} >
                  <div className={styles.listLtem}>
                    <div className={styles.img}>
                      <ReactECharts
                        ref={e => {
                        this.echarts_react = e;
                        }}
                        option = {item.minOption}
                      />
                    </div>
                    <h4 className={styles.title}>{item.title}</h4>
                    <h5 className={styles.subTitle}>{item.subTitle}</h5>
                  </div>
                </div>
                <div className={styles.mask} >
                  <Link to={`/editor/${item.id}`}>
                    <div>编辑</div>
                  </Link>
                  <div>删除</div>
                </div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default LineChart;
