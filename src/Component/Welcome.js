import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome {this.props.name} a.k.a {this.props.heroName} Component
        </p>
      </div>
    );
  }
}

export default Welcome;
