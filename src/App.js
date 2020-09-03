import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";

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

function App() {
  return (
    <div className="App">
      {/* <GreetComponent /> */}

      <WelcomeComponent />
    </div>
  );
}

export default App;
