import React from "react";

import Header from "./Header";
import Hotels from "./Hotels";

import "styles/app.scss";

const App = () => (
  <div className="app">
    <Header />
    <div className="container pt-5 mt-5">
      <Hotels />
    </div>
  </div>
);

export default App;
