import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./apps/Home";
import About from "./apps/About";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
