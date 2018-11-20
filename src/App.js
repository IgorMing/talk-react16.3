import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <input type="button" onClick={() => window.location.reload()} value="Reload page" />
      </div>
    );
  }
}

export default App;
