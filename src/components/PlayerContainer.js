import React from "react";
import PlayerItem from "./PlayerItem";

function PlayerContainer({ players, loading }) {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <section>
      {players.map((player) => (
        <PlayerItem key={player.id} player={player}></PlayerItem>
      ))}
    </section>
  );
}

export default PlayerContainer;
