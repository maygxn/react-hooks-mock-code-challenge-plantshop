import React, { useState } from "react";

function NewPlantForm({ onSubmitPlant }) {
  const emptyForm = {
    name: "",
    image: "",
    price: ""
  }
  
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // parseInt the price, but with decimal need to do parseFloat
    const submittedPlant = {
      ...form,
      price: parseFloat(form.price)
    }
  onSubmitPlant(submittedPlant)
  // reset form
  setForm(emptyForm)
    
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={form.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={form.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
