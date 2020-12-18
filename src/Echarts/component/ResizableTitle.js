
import React from "react";
import { Resizable } from 'react-resizable';
import "react-resizable/css/styles.css";
class  ResizableTitle extends React.Component {
render(){
    const { onResize, width, ...restProps } = this.props;

    if (!width) {
      return <th {...restProps} />;
    }
  
    return (
      <Resizable
        width={width}
        height={0}
        handle={
          <span
            className="react-resizable-handle"
            onClick={e => {
              e.stopPropagation();
            }}
          />
        }
        onResize={onResize}
        draggableOpts={{ enableUserSelectHack: false }}
      >
        <th {...restProps} />
      </Resizable>
    );
}
};
export default ResizableTitle;