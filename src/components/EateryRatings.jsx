import React from 'react';
import "../App.css";

class EateryRatings extends React.Component {
  state = {
    eateries: [],
  };

  componentDidMount() {
    // Fetch eateries from the Sinatra API
    fetch('http://localhost:9292/eateries')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ eateries: data });
      })
      .catch((error) => {
        console.error('Error fetching eateries:', error);
      });
  }

  render() {
    // Sort eateries based on rating in descending order
    const sortedEateries = this.state.eateries.sort((a, b) => b.rating - a.rating);

    return (
      <div>
        <h1 className="heading">Eatery Ratings</h1>
        <ul className="eatery-list">
          {sortedEateries.map((eatery) => (
            <li key={eatery.id} className="eatery-item">
              <h3 className="eatery-name">{eatery.name}</h3>
              <p className="eatery-rating">Rating: {eatery.rating}</p>
              <img className="eatery-picture" src={eatery.picture} alt={eatery.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EateryRatings;
