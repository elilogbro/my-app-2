import React, { useState } from "react";

function Search() {
  return (
    <div className="search">
      <h1>Searching for players, below.</h1>
      <hr></hr>
      <p>
        Have a particular player in mind? Want to filter some specific
        attributes?
      </p>
      <p>
        Search below using the name, age, nationality or position fields to find
        a tailor made player to your liking.
      </p>
      <form>
        <input type="text" placeholder="Search player" autoFocus />
      </form>
    </div>
  );
}

export default Search;
