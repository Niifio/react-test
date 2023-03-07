import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewModal = () => {
  const { cards } = useSelector((state) => state.cardSlice);
  const { index } = useParams();
  const { image, brand, model, year, color, description } = cards[index];
  return (
    <section className="view-container">
      <div className="view-card-content">
        <div className="view-img-container">
          <img src={image} className="card-img" />
        </div>
        <div className="view-card-details">
          <p>Car Brand: {brand} </p>
          <p>Car Model: {model}</p>
          <p>Year of Car: {year}</p>
          <p>Color : {color}</p>
          <div className="description-container">
            <p className="description">Description: {description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewModal;
