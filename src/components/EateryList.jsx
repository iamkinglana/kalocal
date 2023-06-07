import React, { useState } from "react";
import ReviewList from "./ReviewList";
import Review from "./Review";
import DeleteEatery from "./DeleteEatery";

const EateryList = ({ eateries }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [selectedEatery, setSelectedEatery] = useState(null);

  const filteredEateries = eateries.filter((eatery) => {
    const matchSearchQuery = eatery.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchLocationFilter =
      locationFilter === "" ||
      eatery.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchSearchQuery && matchLocationFilter;
  });

  const handleEateryClick = (eatery) => {
    setSelectedEatery(eatery);
  };

  const handleDelete = (eateryId) => {
    // Perform any necessary delete logic here
    console.log(`Deleting eatery with ID: ${eateryId}`);
  };

  return (
    <div>
      <h2 className="eatery-list-heading">Eatery List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <input
        type="text"
        placeholder="Filter by Location..."
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="filter-input"
      />
      {filteredEateries.length > 0 ? (
        filteredEateries.map((eatery) => (
          <div key={eatery.id} onClick={() => handleEateryClick(eatery)} className="eatery-item">
            <h3>{eatery.name}</h3>
            <p>Location: {eatery.location}</p>
            <DeleteEatery
              eateryId={eatery.id}
              onDelete={() => handleDelete(eatery.id)}
            />
            {selectedEatery && selectedEatery.id === eatery.id && (
              <>
                <ReviewList reviews={eatery.reviews} />
                <Review review={eatery.review} />
              </>
            )}
          </div>
        ))
      ) : (
        <p className="no-eateries">No eateries found.</p>
      )}
    </div>
  );
};

export default EateryList;
