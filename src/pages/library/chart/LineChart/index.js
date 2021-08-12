import React from 'react';
import { connect } from 'dva'
import Link from 'umi/link';
import styles from '../chart.less';
import lineSimple from '../img/line-simple.png';
// import lineStack from '../img/line-stack.png';

@connect(({ chartModel }) => (
  {
    lineChartList: chartModel.lineChartList,
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
      console.log('图表加载完毕');
    });
  }

  render() {
    const { lineChartList } = this.props;
    return (
      <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
        <div>
          <h3 className={styles.chartTypeHead}>折线图<span>line</span></h3>
          <div style={{ marginRight: '-15px', marginLeft: '-15px' }}>
            {
              lineChartList.map(item => (
                <div key={item.id} className={styles.colItem} >
                  <div className={styles.listLtem}>
                    <Link to={`${item.path}/$id`}>
                      <img src={lineSimple} data-src={item.dataSrc}
                            data-was-processed={item.dataProcessed}/>
                      <h4 className={styles.title}>{item.title}</h4>
                      <h5 className={styles.subTitle}>{item.subTitle}</h5>
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default LineChart;
