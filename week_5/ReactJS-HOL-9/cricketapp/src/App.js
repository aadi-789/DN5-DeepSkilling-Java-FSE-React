import React from "react";
import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";
import "./App.css";

function App() {
  const flag = false;

  if (flag) {
    return (
      <div className="App">
        <ListOfPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <IndianPlayers />
      </div>
    );
  }
}

export default App;