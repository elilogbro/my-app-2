import React, { useState, useEffect } from "react";
import PlayerItem from "./PlayerItem";

function PlayerContainer() {
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

  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <React.Fragment>
      <div className="database allText">
        <h1>Database</h1>
        <hr></hr>
        <p>
          Below you will find an array of the greatest players to ever grace a
          Football pitch.
        </p>
      </div>
      {players.map((player) => (
        <PlayerItem key={player.id} player={player}></PlayerItem>
      ))}
    </React.Fragment>
  );
}

export default PlayerContainer;
