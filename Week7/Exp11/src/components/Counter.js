import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    // bind methods
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleMultiple = this.handleMultiple.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  increment() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  };

  sayHello() {
    console.log('Hello! This is a static message.');
  }

  handleMultiple() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(`Message: ${message}`);
  }

  handleSyntheticEvent(e) {
    alert('I was clicked!');
    console.log('Synthetic Event:', e);
  }

  render() {
    return (
      <div>
        <h2>🧮 Counter</h2>
        <p>Value: {this.state.count}</p>
        <button onClick={this.handleMultiple}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>

        <h3>📣 Say Welcome</h3>
        <button onClick={() => this.sayWelcome('Welcome to React Events!')}>
          Say Welcome
        </button>

        <h3>🖱️ Synthetic Event</h3>
        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default Counter;
