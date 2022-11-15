import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="homepage">
      <h1>Welcome, to the GOAT index.</h1>
      <hr></hr>
      <p>
        An index for the greatest players to play the game.
        <br></br>
        <br></br>
        View a wide selection of player cards in our view section, add your own
        via the add player, or search for specific players in our search
        section.
      </p>
      <img src="goat.jpg" />
    </div>
  );
}
export default Home;
