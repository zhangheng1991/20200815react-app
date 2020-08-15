/**
 * Created by zhangheng on 2019/5/18.
 */
import React from 'react';
import style from "./user.less";
class User extends React.Component{
  render(){
    return(
      <div>
       <div className={`${style["UserBox"]}`}>
          
       </div>
        {this.props.children}
      </div>
    )
  }
}
export default User;
