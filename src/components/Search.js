import React, { useState } from "react";

function Search({ onFilterText }) {
  const [userInput, setUserInput] = useState("")
  
  const handleSearch = (e) => {
    const input = e.target.value
    setUserInput(input)
    onFilterText(input)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
        value={userInput}
      />
    </div>
  );
}

export default Search;
