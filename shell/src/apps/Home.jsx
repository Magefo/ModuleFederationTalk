import React, { useEffect, useRef } from "react";
import { mount } from "home/bootstrap";

const Home = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref}></div>;
};

export default Home;
