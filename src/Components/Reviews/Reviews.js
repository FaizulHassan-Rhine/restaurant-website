import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-32 px-6 md:px-10 lg:px-20 ">
      <div>
        <h2 className="text-4xl text-center text-orange-400 font-bold">
          What Our Customers Says
        </h2>
      </div>

      <div className="grid grid-cols-1 justify-items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
