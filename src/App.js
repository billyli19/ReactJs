import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import FunctionClick from "./Component/FunctionClick";
import ClassClick from "./Component/ClassClick";
import EventBind from "./Component/EventBind";
import ParentComponent from "./Component/ParentComponent";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/NameList";
import Stylesheet from "./Component/Stylesheet";
import InLine from "./Component/InLine";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./Component/Form";

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

// Event Handeling
function FunctionClickComponent() {
  return (
    <div>
      <FunctionClick />
    </div>
  );
}

function ClassClickComponent() {
  return (
    <div>
      <ClassClick />
    </div>
  );
}

// Binding Event Handlers
function EventBindComponent() {
  return (
    <div>
      <EventBind />
    </div>
  );
}

// Methods as props
function ParentMethodComponent() {
  return (
    <div>
      <ParentComponent />
    </div>
  );
}

// Conditional Rendering
function UserGreetingComponent() {
  return (
    <div>
      <UserGreeting />
    </div>
  );
}

// List Rendering
function NameListComponent() {
  return (
    <div>
      <NameList />
    </div>
  );
}

// Stylsheet
function StylesheetComponent() {
  return (
    <div>
      <Stylesheet primary={true} />
    </div>
  );
}

// InLine
function InLineComponent() {
  return (
    <div>
      <InLine />
    </div>
  );
}

// Error Style sheet
function ErrorStyleSheet() {
  return (
    <div>
      <h1 className="error">Error</h1>
    </div>
  );
}

// Success Style sheet
function SuccesModuleStyleSheet() {
  return (
    <div>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

// Form component
function FormComponent() {
  return (
    <div>
      <Form />
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

      {/* <CounterComponent /> */}

      {/* <FunctionClickComponent /> */}

      {/* <ClassClickComponent /> */}

      {/* <EventBindComponent /> */}

      {/* <ParentMethodComponent /> */}

      {/* <UserGreetingComponent /> */}

      {/* <NameListComponent /> */}

      {/* <StylesheetComponent /> */}

      {/* <InLineComponent /> */}

      {/* <ErrorStyleSheet /> */}

      {/* <SuccesModuleStyleSheet /> */}

      {/* <FormComponent /> */}
    </div>
  );
}

export default App;
