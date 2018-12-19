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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit() {
    this.state.messages.push(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Enter a message here!</h1>
        <input value={this.state.input} onChange={this.handleChange} />
        <p>{this.state.input}</p>
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {this.state.messages.map(x => <li>{x}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
