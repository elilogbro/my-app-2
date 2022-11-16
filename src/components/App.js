import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import PlayerContainer from "./PlayerContainer";
import NavBar from "./NavBar";
import AddPlayer from "./AddPlayer";

function App() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/playerData`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, [searchInput]);

  function searchInputFunction(e) {
    setSearchInput(e);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/View">
          <PlayerContainer
            loading={loading}
            players={players}
            getSearchInput={searchInputFunction}
          />
        </Route>
        <Route exact path="/View/AddPlayer">
          <AddPlayer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="">404 (not found)</Route>
      </Switch>
    </div>
  );
}

export default App;
