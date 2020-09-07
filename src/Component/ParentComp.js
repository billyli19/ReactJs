import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Billy",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Billy",
      });
    }, 2000);
  }

  render() {
    console.log("***** parent component *****");
    return (
      <div>
        Parent Component
        {/* Class Component */}
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
        {/* Functional Component */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
