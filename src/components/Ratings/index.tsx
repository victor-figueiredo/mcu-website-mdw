import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <span
            key={index}
            style={{
              color: ratingValue <= rating ? "gold" : "gray",
              cursor: "pointer",
              fontSize: "25px",
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
