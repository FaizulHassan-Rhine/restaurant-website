import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="mb-4">{review.review}</p>
        <div className="flex  items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="ml-4">{review.name}</h4>
            <p className="ml-4">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
