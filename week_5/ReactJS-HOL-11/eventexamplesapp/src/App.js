import React from "react";
import EventExamples from "./components/EventExamples";
import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EventExamples />
      <br />
      <CurrencyConverter />
    </div>
  );
}

export default App;