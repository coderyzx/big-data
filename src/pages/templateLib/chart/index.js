import React from 'react';
import { connect } from 'dva'
import Link from 'umi/link';
import ReactECharts from 'echarts-for-react';
import styles from './chart.less';
import { withRouter } from "react-router-dom";
@connect(({ chartModel }) => (
  {
    chartList: chartModel.chartList,
  }),
)
class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { dispatch} = this.props;
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    dispatch({
      type: 'chartModel/getChartList',
      payload: id,
    });

  }

  render() {
    // const { chartList } = this.props;
    // console.log( this.props.match.params.id);
    return (
        <div>nihao </div>
      // <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
      //   <h3 className={styles.chartTypeHead}>{chartList.name}</h3>
      //   {
      //     (chartList|| []).map(item => (
      //       <div key={item.id} style={{ marginRight: '-15px', marginLeft: '-15px' }}>
      //         <div className={styles.colItem} >
      //           <div className={styles.listLtem}>
      //             <div className={styles.img}>
      //               <ReactECharts
      //                 ref={e => {
      //                 this.echarts_react = e;
      //                 }}
      //                 option = {item.option}
      //               />
      //             </div>
      //             <h4 className={styles.title}>{item.title}</h4>
      //             {/* <h5 className={styles.subTitle}>{item.subTitle}</h5> */}
      //           </div>
      //         </div>
      //         <div className={styles.mask} >
      //           <Link to={`/editor/${item.id}`}>
      //             <div>编辑</div>
      //           </Link>
      //           <div>删除</div>
      //         </div>
      //       </div>
      //     ))
      //   }
      // </div>
    )
  }
}

export default withRouter(Chart);
