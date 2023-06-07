import React, { useEffect, useState } from 'react';

function EateriesRanking() {
  const [eateries, setEateries] = useState([]);

  useEffect(() => {
    fetchEateries();
  }, []);

  const fetchEateries = async () => {
    try {
      const response = await fetch('http://localhost:9292/eateries');
      const data = await response.json();
      setEateries(data);
    } catch (error) {
      console.log('Error fetching eateries:', error);
    }
  };

  const calculateAverageRating = (ratings) => {
    const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRating / ratings.length;
    return averageRating.toFixed(2); // Round to 2 decimal places
  };

  const rankEateriesByRating = () => {
    // Sort eateries by average rating in descending order
    const sortedEateries = eateries.sort(
      (a, b) => calculateAverageRating(b.ratings) - calculateAverageRating(a.ratings)
    );

    return sortedEateries.map((eatery, index) => (
      <div key={eatery.id}>
        <h3>{eatery.name}</h3>
        <p>Average Rating: {calculateAverageRating(eatery.ratings)}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Eateries Ranking</h2>
      {rankEateriesByRating()}
    </div>
  );
}

export default EateriesRanking;
