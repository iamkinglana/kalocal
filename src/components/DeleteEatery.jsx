import React from "react";

const DeleteEatery = ({ eateryId, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:9292/eateries/${eateryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Optional: Log the response from the server
        onDelete(); // Invoke the onDelete callback to trigger any necessary updates
      })
      .catch((error) => {
        console.error("Error deleting eatery:", error);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEatery;
