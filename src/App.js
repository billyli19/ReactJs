import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";

// Functional Component
function GreetComponent() {
  return (
    <div>
      <Greet />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <GreetComponent />
    </div>
  );
}

export default App;
