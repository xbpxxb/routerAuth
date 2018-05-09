import React, { Component } from 'react';
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.clickMe = this.clickMe.bind(this)
  }
  clickMe() {
    console.log(this)
  }
  render() {
    return (
      <h1 onClick={this.clickMe}>点我</h1>
    )
  }
}
