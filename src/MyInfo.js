import React from "react";
import ReactDOM from "react-dom";

function Parent() {
  return (
    <div>
      <App />
      <MyInfo />
    </div>
  );
}

const App = () => (
  <div>
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
  </div>
);

function MyInfo() {
  return (
    <div>
      <h1>My Info</h1>
      <p>This is my bio </p>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("leaf"));
