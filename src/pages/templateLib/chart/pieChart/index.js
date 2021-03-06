import React from 'react';
import { connect } from 'dva'
import Link from 'umi/link'
import styles from '../chart.less';
import pie from '../img/pie-roseType-simple.png';

@connect(({ chartModel }) => (
  {
    pieChartList: chartModel.pieChartList,
  }),
)
class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chartModel/getChartList',
      payload: {},
    });
  }

  render() {
    const { pieChartList } = this.props;
    return (
      <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
        <div>
          <h3 className={styles.chartTypeHead}>饼图<span>line</span></h3>
          <div style={{ marginRight: '-15px', marginLeft: '-15px' }}>
            {
              pieChartList.map(item => (
                <div key={item.key} className={styles.colItem} >
                  <div className={styles.listLtem}>
                    <Link href={item.href}>
                      <img src={pie} data-src={item.dataSrc}
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

export default PieChart;
