import React, { useState } from "react";

function PlantCard({ plant }) {
  // state for stock
  const [inStock, setInStock] = useState(true)

  const toggleInStock = () => {
    setInStock(!inStock)
  }

  const stockButton = (
    <button className={inStock ? "primary" : ""} onClick={toggleInStock}>
      {inStock ? "In Stock" : "Out of Stock"}
    </button>
)

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        {stockButton}
    </li>
  );
}

export default PlantCard;
