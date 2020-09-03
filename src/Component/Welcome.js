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

  // Destructor A
  // render() {
  //   const{name, heroName} = this.props
  //   //destructor states
  //   const{state1, state2} = this.state
  //   return (
  //     <h1>
  //       Welcome {name} a.k.a {heroName}
  //     </h1>
  //   )
  // }
}

export default Welcome;
