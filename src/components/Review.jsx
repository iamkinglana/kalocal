import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:9292/eateries/${eatery.id}`
        );
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <h3>{review.title}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
