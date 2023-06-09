import React from "react";

const DeleteEatery = ({ eateryId, onDelete }) => {
  const handleDelete = () => {
    fetch(`http://localhost:9292Y/eateries/${eateryId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        onDelete(); // Optional: Perform any additional actions after deletion
      })
      .catch((error) => {
        console.log("Failed to delete eatery:", error);
      });
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      {/* Delete */}
    </button>
  );
};

export default DeleteEatery;
