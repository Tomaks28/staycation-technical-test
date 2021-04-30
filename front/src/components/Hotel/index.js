import React from "react";
import Pricing from "../Pricing";

import "styles/hotel.scss";

const Hotel = ({ hotel }) => {
  return (
    <div className={`card col-12 col-sm-6 p-2 border-0 hotel`}>
      <img className="card-img-top" src={hotel.pictureId} alt={hotel.preview} />
      <div className="card-body px-0 ">
        <div className="container">
          <h5 className="title">{`${hotel.name} ${"*".repeat(
            hotel.stars
          )}`}</h5>
          <div className="reviews">9.6 (210)</div>
        </div>
        <p className="preview">{hotel.preview}</p>
        <Pricing
          {...{ discountPrice: hotel.discountPrice, price: hotel.price }}
        />
      </div>
    </div>
  );
};

export default Hotel;
