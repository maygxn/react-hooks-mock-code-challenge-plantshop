import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  // iterate over array
  const displayPlantCards = plants.map(plant =>
    <PlantCard key={plant.id} plant={plant} />
    )


  return (
    <ul className="cards">{displayPlantCards}</ul>
  );
}

export default PlantList;
