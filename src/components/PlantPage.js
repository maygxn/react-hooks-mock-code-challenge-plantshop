import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // state and then fetch data
  const url = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [filterText, setFilterText] = useState("")

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPlants(data)
      })
  }, [])


  // new plant when submitted and need POST req
  const submitNewPlant = (newPlant) => {
    fetch(url, {
      method: "POST",
      headers: {"content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newPlant => {
      setPlants([...plants, newPlant])
    })
  }

  function onFilterText(text) {
    setFilterText(text)
  }

  const displayPlants = plants.filter(plants => {
    const searchLowerCase = filterText.toLowerCase()
    return plants.name.toLowerCase().includes(searchLowerCase)
  })
  
  return (
    <main>
      <NewPlantForm onSubmitPlant={submitNewPlant} url={url}/>
      <Search onFilterText={onFilterText}/>
      <PlantList plants={displayPlants}/>
    </main>
  );
}

export default PlantPage;
