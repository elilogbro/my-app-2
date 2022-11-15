import React from "react";

function PlayerItem({ player }) {
  return (
    <div>
      <div className="card-img">
        <img src={player.imageUrl} alt="player" />
      </div>
      <h1>Name: {player.name}</h1>
      <ul>
        <li>Age: {player.age}</li>
        <li>Nationality: {player.nationality}</li>
        <li>Position: {player.position}</li>
      </ul>
    </div>
  );
}

export default PlayerItem;
