import React from "react";

import "styles/pricing.scss";

const Pricing = ({ price, discountPrice }) => {
  const percentage = (1 - discountPrice / price) * 100;

  return (
    <div className="pricing">
      <div className="discount-price">{discountPrice}€</div>
      <div className="price">{price}€</div>
      <div className="percentage">{`-${percentage.toFixed(0)}%`}</div>
    </div>
  );
};

export default Pricing;
