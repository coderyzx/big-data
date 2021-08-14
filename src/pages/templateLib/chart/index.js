import React from 'react';
import { connect } from 'dva'
// import Link from 'umi/link';
import ReactECharts from 'echarts-for-react';
import { withRouter } from 'react-router-dom';
import styles from './chart.less';

@connect(({ chartModel }) => (
  {
    chartList: chartModel.chartList,
    chartListName: chartModel.chartListName,
  }),
)
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // console.log('componentDidMount', this.props.match.params.id);
    // var id = this.props.match.params.id;
    dispatch({
      type: 'chartModel/getChartList',
      payload: {},
    });
  }

  getChartList() {
    const { chartList, chartListName } = this.props;
    Object.values(chartList).forEach(chartType => {
      if (chartType === chartListName) {
        // console.log(chartType);
        // console.log(chartListName);
        return (
          <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
            <h3 className={styles.chartTypeHead}>{chartType.name}</h3>
            {
              // chartType.list.map(item =>{
              //   console.log(item);
              //   return (<div>{item}</div>)
              // })
              chartType.list.map(item => (
                <div key={item.id} style={{ marginRight: '-15px', marginLeft: '-15px' }}>
                  <div className={styles.colItem} >
                    <div className={styles.listLtem}>
                      <div className={styles.img}>
                        <ReactECharts
                          ref={e => {
                          this.echarts_react = e;
                          }}
                          option = {item.option}
                        />
                      </div>
                      <h4 className={styles.title}>{item.title}</h4>
                      {/* <h5 className={styles.subTitle}>{item.subTitle}</h5> */}
                    </div>
                  </div>
                  {/* <div className={styles.mask} >
                    <Link to={`/editor/${item.option}`}>
                      <div>编辑</div>
                    </Link>
                    <div>删除</div>
                  </div> */}
                </div>
              ))
            }
          </div>
        )
      }
        return 'error';
    })
  }

  render() {
    // console.log(chartList.lineChart);
    // console.log('render', this.props.match.params.id);
    return (
      // <div>{this.props.match.params.id}</div>
      <>
        {this.getChartList()}
      </>
    )
  }
}

export default withRouter(Chart);
