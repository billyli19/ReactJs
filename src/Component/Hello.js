import React from "react";

const Hello = () => {
  //   JSX
  //   return (
  //     <div className = 'dummyClass'>
  //       <h1> Hello Billy</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Billy")
  );
};

export default Hello;
