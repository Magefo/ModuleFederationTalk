import React from "react";
import ReactDom from "react-dom";
import HomeApp from "./HomeApp";

const mount = (el) => {
  ReactDom.render(<HomeApp />, el);
};

export { mount };
