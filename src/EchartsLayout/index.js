import React from "react";
import styles from './index.css';
import Link from 'umi/link';
 class   BasicLayout extends React.Component {
 render(){
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to echarts!</h1>
      <Link to="/">返回首页</Link>
      {this.props.children}
    </div>
  );
 }
}

export default BasicLayout;
