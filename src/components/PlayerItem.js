import React from "react";

function PlayerItem({ player }) {
  return (
    <div>
      <div className="carding">
        <img src={player.imageUrl} alt="player" />

        <h3>{player.name}</h3>
        <p>Age: {player.age}</p>
        <p>Nationality: {player.nationality}</p>
        <p>Position: {player.position}</p>
      </div>
    </div>
  );
}

export default PlayerItem;
