import React, { useState } from "react";

const EateryForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:9292/eateries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location, rating })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful submission
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    // Reset form fields
    setName("");
    setLocation("");
    setRating("");
  };

  return (
    <div>
      <h2>Add New Eatery</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EateryForm;
