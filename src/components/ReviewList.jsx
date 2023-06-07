import React, { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:9292/reviews`);
        const data = await response.json();
        setReviews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm />
    </div>
  );
};

export default ReviewList;
