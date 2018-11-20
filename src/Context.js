import React, { Component } from 'react';

export default class Parent extends Component {
  render() {
    return (
      <FirstChild msg="Hi people!" />
    );
  }
}

class FirstChild extends Component {
  render() {
    return <SecondChild msg={this.props.msg} />;
  }
}

class SecondChild extends Component {
  render() {
    return <h2>{this.props.msg}</h2>
  }
}
