import React from "react";
import logo from "./logo.svg";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Edit <code>src/App.js</code> and save to reload.
        </h1>
        <h2>example for extending color in less</h2>
        <h3>example for inside function in less</h3>
        <Button variant="light">Click me to change the color of </Button>
      </header>
    </div>
  );
}

export default App;
