import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      messages: []
    }
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Enter a message here!</h1>
        <input value={this.state.input} onChange={this.handleChange.bind(this)} />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
