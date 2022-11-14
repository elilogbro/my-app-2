import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import playerContainer from "./PlayerContainer";

function App() {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/playerData")
      .then((response) => response.json())
      .then((data) => {
        {
          data;
        }
      });
  });

  return (
    <div className="App">
      <Switch>
        <Route>
          <Home />
          <PlayerContainer loading={loading} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
