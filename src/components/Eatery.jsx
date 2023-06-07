import React from 'react';

const Eatery = ({ eatery }) => {
  return (
    <div>
      <h2>{eatery.name}</h2>
      <p>Location: {eatery.location}</p>
      <p>Rating: {eatery.rating}</p>
      <ReviewList eateryId={eatery.id} />
    </div>
  );
};

export default Eatery;
