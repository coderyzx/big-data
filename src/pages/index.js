import { formatMessage } from 'umi-plugin-react/locale';
import { Switch } from 'antd';
import React from 'react';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <Switch defaultChecked />
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
    </div>
  );
}
