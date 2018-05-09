import React, { Component } from 'react'
import './login.less'
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="title">
          <p>登录</p> 
          <img src={require('../images/close1@2x.png')} alt=""/>
          <div></div>
        </div>
        <div className="login_con">
          <ul>
            <li>
              <input type="text" placeholder="请输入11位手机号码"/>
            </li>
            <li>
              <input type="text" placeholder="请输入图形验证码"/>
            </li>
            <li>
              <input type="text" placeholder="请输入验证码"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}