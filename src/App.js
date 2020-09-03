import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Counter from "./Component/Counter";

// Functional Component
function GreetComponent() {
  return (
    <div>
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman">
        <Welcome name="Tony" heroName="Iron Man" />
        <Welcome name="Steve" heroName="Captain America" />
        <Welcome name="Nathasha" heroName="Blackwidow" />
      </Greet>
    </div>
  );
}

// Class Component
function WelcomeComponent() {
  return (
    <dv>
      <Welcome />
    </dv>
  );
}

//JSX Component
function HelloComponent() {
  return (
    <div>
      <Hello />
    </div>
  );
}

// State Component
function MessageComponent() {
  return (
    <div>
      <Message />
    </div>
  );
}

// setState Compoment
function CounterComponent() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* <GreetComponent /> */}

      {/* <WelcomeComponent /> */}

      {/* <HelloComponent /> */}

      {/* <MessageComponent /> */}

      <CounterComponent />
    </div>
  );
}

export default App;
