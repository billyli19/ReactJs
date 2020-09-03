import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";

// Functional Component
function GreetComponent() {
  return (
    <div>
      <Greet />
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

function App() {
  return (
    <div className="App">
      {/* <GreetComponent /> */}

      {/* <WelcomeComponent /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
