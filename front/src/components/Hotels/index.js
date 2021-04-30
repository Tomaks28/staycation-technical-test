import React from "react";
import axios from "axios";

import Hotel from "../Hotel";

const Hotels = () => {
  const [hotels, setHotels] = React.useState([]);

  React.useEffect(() => {
    axios("http://localhost:9000/hotels")
      .then(({ data }) => setHotels(data))
      .catch((e) => console.warn("Error: ", e));
  }, []);

  return (
    <div className="row">
      {hotels.map((hotel) => (
        <Hotel key={hotel.id} {...{ hotel }} />
      ))}
    </div>
  );
};

export default Hotels;
