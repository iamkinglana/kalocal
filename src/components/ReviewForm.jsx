import React, { useState } from "react";

const ReviewForm = ({ eateryId }) => {
  const [picture, setPicture] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:9292/eateries/${eateryId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ picture, comment })
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
    setPicture("");
    setComment("");
  };

  return (
    <div>
      <h3>Add Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Picture"
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
        />
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
