import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // First approach
    if (this.state.isLoggedIn) {
      return <div>Hello Billy</div>;
    } else {
      return <div>Hello Guest</div>;
    }

    //Second approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Billy</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message}</div>;

    //Third approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Billy</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    //Forth approach
    // return this.state.isLoggedIn && <div>Welcome Billy</div>;
  }
}

export default UserGreeting;
