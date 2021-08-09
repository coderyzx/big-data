import React from 'react';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
    }

    render () {
      return (
        <>
          <h2 onClick={() => { this.sendMsg() }}>
            欢迎访问大数据管理平台-BDMP
          </h2>
        </>
      )
    }
}

export default Home;
