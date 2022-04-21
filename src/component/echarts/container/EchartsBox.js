import React from 'react';
import style from './style.less';

class EchartsBox extends React.Component {
  render() {
    const { title,background } = this.props;
    return (
      <div class={`${style['PublicBox']}`} style={{background:background||""}}>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    );
  }
}
export default EchartsBox;
