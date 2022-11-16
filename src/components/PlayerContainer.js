import React, { useState } from "react";
import PlayerItem from "./PlayerItem";
import AddPlayerButton from "./AddPlayerButton";

function PlayerContainer({ players, loading, getSearchInput }) {
  const [search, setSearch] = useState("");

  function onChange(e) {
    setSearch(e);
    getSearchInput(e);
  }
  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <React.Fragment>
      <div className="database allText">
        <h1>GOAT index.</h1>
        <hr></hr>
        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search player..."
            autoFocus
          />
        </form>
        <p>
          Below you will find an array of the greatest players to ever grace a
          Football pitch.
        </p>
        <br></br>
        <AddPlayerButton />
      </div>
      {players.map((player) => (
        <PlayerItem key={player.id} player={player}></PlayerItem>
      ))}
    </React.Fragment>
  );
}

export default PlayerContainer;
