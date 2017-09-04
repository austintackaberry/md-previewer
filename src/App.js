import React, { Component } from 'react';
import './App.css';

var marked = require('marked');

class Markdown extends Component {
  liveDangerously() {
    var market = marked(this.props.value);
    return {__html: market};
  }

  render() {
    return (
      <div className="result" dangerouslySetInnerHTML={this.liveDangerously()} />
    );
  }
}

class Input extends Component {
  constructor(event) {
    super();
    this.state = {
      value: ''
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="content">
        <textarea rows="40" cols="50" className="input" onChange={this.textChange} ></textarea>
        <Markdown
          value={this.state.value}
        />
      </div>
    );
  }props
}

class App extends Component {

  render() {
    return (
      <Input />
    );
  }
}

export default App;
