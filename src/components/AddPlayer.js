import { useState } from "react";
import React from "react";

function AddPlayer() {
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    age: "",
    nationality: "",
    position: "",
    imageUrl: "",
  });

  //since the id values are the same as the keys in formData, we can write an abstract setFormData here
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
    };
    fetch("http://localhost:3001/playerData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(xxx),
    });
  }

  return (
    <React.Fragment>
      <div className="addplayer">
        <h1>Adding a player to our GOAT index.</h1>
        <hr></hr>

        <p>Follow the instructions in the form below.</p>
        <p>Hit the enter button.</p>
        <p>
          Our app will automatically re direct you to the database so you can
          see your changes.
        </p>
      </div>
      <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name..."
        />
        <input
          type="text"
          name="imageUrl"
          onChange={handleChange}
          placeholder="Image URL here..."
        />
        <input
          type="text"
          name="position"
          onChange={handleChange}
          placeholder="Position..."
        />
        <input
          type="text"
          name="age"
          onChange={handleChange}
          placeholder="Age..."
        />
        <input
          type="text"
          name="nationality"
          onChange={handleChange}
          placeholder="Nationality..."
        />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

export default AddPlayer;
