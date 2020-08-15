import React from 'react';
import style from './style.less';

class EchartsBox extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div class={`${style['PublicBox']}`}>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    );
  }
}
export default EchartsBox;
