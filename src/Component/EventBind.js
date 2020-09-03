import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // Third approach (step 2)
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     console.log(this);
  //   }

  // Forth approach (step 2)
  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* First approach */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Second approach */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Official Third approach (step 1) */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* Forth approach (step 1)*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
