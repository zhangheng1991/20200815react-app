import React from 'react';
import styles from './index.css';
import Link from 'umi/link';
import IndexEcharts from '../layouts/indexEcharts';
class BasicLayout extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        {/* <h1 className={styles.title}> */}
        {/* <Link to="/">返回首页</Link> */}
        <IndexEcharts keyId={this.props.location.pathname} />
        {/* </h1> */}
        <div style={{ paddingTop: '4rem' }}>
          <Link to="/">返回首页</Link>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BasicLayout;
