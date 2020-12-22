import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
class BasicLayout extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>
          <Link to="/">返回首页</Link>
        </h1>
        <div style={{ paddingTop: '4rem' }}>{this.props.children}</div>
      </div>
    );
  }
}

export default BasicLayout;
