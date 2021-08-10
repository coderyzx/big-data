import React from 'react';
import styles from './home.less'

class Wellcome extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
    }

    render () {
      return (
        <>
          <h2 onClick={() => { this.sendMsg() }} className ={styles.h2} >
            <b>欢迎访问大数据管理平台-BDMP</b>
          </h2>
        </>
      )
    }
}

export default Wellcome;
