import React, { Component } from 'react';

export default class Parent extends Component {
  state = {
    message: 'Hi people!'
  }

  render() {
    return (
      <FirstChild msg={this.state.message} />
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
