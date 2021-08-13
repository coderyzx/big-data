import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;
class Chart extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Content>
        {children}
      </Content>
    )
  }
}
export default Chart;
