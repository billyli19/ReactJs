import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // increment with 1 step
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value", this.state.count);
      }
    );

    // increment with 5 steps
    // this.setState((previousState) => ({
    //   count: previousState.count + 1,
    // }));

    console.log(this.state.count);
  }

  //   incrementFive() {
  //     this.increment();
  //     this.increment();
  //     this.increment();
  //     this.increment();
  //     this.increment();
  //   }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}> Increment</button>
        {/* <button onClick={() => this.incrementFive()}> Increment</button> */}
      </div>
    );
  }
}

export default Counter;
