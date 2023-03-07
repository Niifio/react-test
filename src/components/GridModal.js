import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const GridModal = ({ onEdit, onDelete }) => {
  const { cards, query } = useSelector((state) => state.cardSlice);
  const cardList = useMemo(
    () =>
      cards.filter((item) => {
        return query.toLowerCase() === " "
          ? item
          : item.brand.toLowerCase().includes(query);
      }),
    [query]
  );
  return (
    <>
      <div className="grid-container">
        <section className="grid-cardbody">
          {cardList
            ? cardList.map((result, index) => {
                const { image, brand, model, year, color, description } =
                  result;

                return (
                  <div key={index} className="grid-section">
                    <div className="grid-card-content">
                      <div className="grid-card-img">
                        <img src={image} />
                      </div>
                      <div className="grid-card-details">
                        <p>Car Brand: {brand} </p>
                        <p>Car Model: {model}</p>
                        <p>Year of Car: {year}</p>
                        <p>Color : {color}</p>
                        <div className="des-container">
                          <p className="description">
                            Description: {description}
                          </p>
                        </div>

                        <div className="grid-action-container">
                          <div className="grid-action-btn">
                            <Link
                              to={`/home/user/create/dashboard/view/${index}`}
                            >
                              <button>view</button>
                            </Link>
                            <button className="" onClick={() => onEdit(index)}>
                              Edit
                            </button>
                            <button
                              className=""
                              onClick={() => onDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </section>
      </div>
    </>
  );
};

export default GridModal;
