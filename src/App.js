import React, { useState } from "react";
import { useSearch } from "./useSearch";
import './App.css'; // Import custom CSS for styling

function App() {
  const items = ["apple", "banana", "orange", "grapes", "pineapple", "strawberry"];
  
  // Using the custom hook to handle the search logic
  const { filteredItems, handleSearchChange } = useSearch(items);

  return (
    <div className="app-container">
      <h1 className="title">Fruit List</h1>

      {/* Search Input */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search fruits..."
          onChange={handleSearchChange}
        />
      </div>

      {/* Display Filtered Items */}
      <ul className="item-list">
        {filteredItems.length === 0 ? (
          <li className="no-items">No items found</li>
        ) : (
          filteredItems.map((item, index) => (
            <li key={index} className="item">{item}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
