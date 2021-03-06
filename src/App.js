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
import LifecycleA from "./Component/LifecycleA";
import FragmentDemo from "./Component/FragmentDemo";
import Table from "./Component/Table";
import PureComp from "./Component/PureComp";
import ParentComp from "./Component/ParentComp";
import RefsDemo from "./Component/RefsDemo";
import FocusInput from "./Component/FocusInput";
import FRParentInput from "./Component/FRParentInput";
import Hero from "./Component/Hero";
import ErrorBoundary from "./Component/ErrorBoundary";
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";
import ClickCounterTwo from "./Component/ClickCounterTwo";
import HoverCounterTwo from "./Component/HoverCounterTwo";
import User from "./Component/User";
import CounterContainer from "./Component/CounterContainer";

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

// setState Component
function CounterComponent() {
  return (
    <div>
      <Counter />
    </div>
  );
}

// Event Handling
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

// Life Cycle Methods
function LifeCycleA() {
  return (
    <div>
      <LifecycleA />
    </div>
  );
}

// Fragments Demo
function FragmentsDemoComponent() {
  return (
    <div>
      <FragmentDemo />
    </div>
  );
}

function TableComponent() {
  return (
    <div>
      <Table />
    </div>
  );
}

// Pure Component
function PureComponent() {
  return (
    <div>
      <PureComp />
    </div>
  );
}

// Parent Component
function ParentCompComponent() {
  return (
    <div>
      <ParentComp />
    </div>
  );
}

// Refs Component
function RefsComponent() {
  return (
    <div>
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
    </div>
  );
}

// Error boundary
function HeroComponent() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
  );
}

// Click counter component
function ClickCounterComponent() {
  return (
    <div>
      <ClickCounter name="Billy" />
      <HoverCounter />
    </div>
  );
}

// Click counter component
function ClickCounterTwoComponent() {
  return (
    <div>
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Billy" : "Guest")} /> */}

      <CounterContainer
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterContainer
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
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

      {/* <LifecycleA /> */}

      {/* <FragmentsDemoComponent /> */}

      {/* <TableComponent /> */}

      {/* <PureComponent /> */}

      {/* <ParentCompComponent /> */}

      {/* <RefsComponent /> */}

      {/* <HeroComponent /> */}

      {/* <ClickCounterComponent /> */}

      <ClickCounterTwoComponent />
    </div>
  );
}

export default App;
