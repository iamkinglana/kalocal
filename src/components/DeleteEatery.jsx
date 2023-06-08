import React from "react";

const DeleteEatery = ({ eateryId, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:9292/eateries/${eateryId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (response.ok) {
          onDelete(); // Invoke the onDelete callback to trigger any necessary updates
        } else {
          throw new Error("Failed to delete eatery");
        }
      })
      .catch((error) => {
        console.error("Error deleting eatery:", error);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteEatery;
