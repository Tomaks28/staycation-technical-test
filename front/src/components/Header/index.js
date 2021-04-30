import React, { useEffect, useState } from "react";
import axios from "axios";

import "styles/header.scss";

import StaycationLogo from "./StaycationLogo";

const Header = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:9000/users/1")
      .then((result) => setUser(result.data))
      .catch((e) => console.warn("Error: ", e));
  }, []);

  return (
    <div className="header d-flex align-items-center fixed-top">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <StaycationLogo />
          {user && (
            <div className="header__user">Welcome, {user.firstName}!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
