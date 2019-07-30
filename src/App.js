import React from "react";
import "./App.css";
import { GameBoard } from "./GameBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Card {...{ suitId: 0, value: 4 }} />
        <hr></hr>
        <Card {...{ suitId: 2, value: 5 }} /> */}
        <GameBoard />
      </header>
    </div>
  );
}

export default App;
