import React, { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import "../App.css"; // Import the CSS file

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`http://localhost:9292/reviews/${reviewId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted review from the local state
        setReviews((prevReviews) => prevReviews.filter((review) => review.id !== reviewId));
      } else {
        console.error("Failed to delete review.");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div>
      <h2 className="review-list-heading">Review List</h2>
      {reviews.map((review, index) => (
        <div key={index} className="review-item">
          <p>Comment: {review.comment}</p>
          <img src={review.picture} alt="Review Picture" />
          <button className="delete-button" onClick={() => deleteReview(review.id)}>
            Delete
          </button>
        </div>
      ))}
      <ReviewForm />
    </div>
  );
};

export default ReviewList;
