import React from "react";

import { Routing } from "pages";

import { withProviders } from "./providers";

// I don't like idea of re-exporting scss that's weird IMHO that's why I'd go to styles folder
import "./styles/index.scss";

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
