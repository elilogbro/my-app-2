import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/playerData`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Switch>
        <Route>
          <Home />
          <PlayerContainer loading={loading} players={players} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
