import { useState } from "react";
import React from "react";

function AddPlayer() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    nationality: "",
    position: "",
  });

  //since the id values are the same as the keys in formData, we can write an abstract setFormData here
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/playerData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <React.Fragment>
      <div className="allText">
        <h1>Adding a player to our Database</h1>
        <hr></hr>
        <p>1: Follow the instructions in the form below</p>
        <p>2: Hit the enter button</p>{" "}
        <p>
          3: Our app will automatically re direct you to the database so you can
          see your changes
        </p>
      </div>
      <br></br>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id=""
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </React.Fragment>
  );
}

export default AddPlayer;
