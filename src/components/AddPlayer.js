import { useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

const linkStyles = {
  padding: "6px",
  margin: "0 6px 6px",
  fontFamily: "Arial, Helvetica, sans-serif",
  marginLeft: "30px",
  marginRight: "30px",
};

function AddPlayer({players, setPlayers}) {
  const history = useHistory();

  const [newPlayer, setNewPlayer] = useState({
    name: "",
    age: "",
    nationality: "",
    position: "",
    imageUrl: "",
  });

  function handleChange(event) {
    setNewPlayer({
      ...newPlayer,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const xxx = {
      name: newPlayer.name,
      imageUrl: newPlayer.imageUrl,
      position: newPlayer.position,
      age: newPlayer.age,
      nationality: newPlayer.nationality,
    }

    fetch("http://localhost:3000/playerData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xxx),
    })
    .then(res => res.json())
    .then(newPlayer => handleNewPlayer(newPlayer))

    history.push("/View")
  };

  const handleNewPlayer = (newPlayer) => {
    setPlayers([...players, newPlayer])
  }

  return (
    <div>
      <div className="addplayer">
        <h1>Adding a player to our GOAT index.</h1>
        <hr></hr>

        <p>Follow the instructions in the form below.</p>
        <p>Hit the submit button.</p>
        <p>
          Our app will automatically re direct you to the index so you can see
          your changes.
        </p>
      </div>
      <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name..."
          style={linkStyles}
        />
        <input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          placeholder="Image URL here..."
          style={linkStyles}
        />
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Position..."
          style={linkStyles}
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Age..."
          style={linkStyles}
        />
        <input
          type="text"
          name="nationality"
          onChange={handleChange}
          placeholder="Nationality..."
          style={linkStyles}
        />
        <br></br>
        <br></br>
        <button className="addPlayerButton" type="submit" style={linkStyles}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPlayer;
