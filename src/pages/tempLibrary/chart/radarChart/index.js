import React from 'react';

class radarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div style={{ margin: '0 20px', minHeight: 'calc(100vh)' }}>
        <h3>雷达图<span>line</span></h3>
      </div>
    )
  }
}

export default radarChart;
