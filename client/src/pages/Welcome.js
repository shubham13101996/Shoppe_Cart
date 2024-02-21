import React from "react";
import Layouts from "../components/Layout/Layouts";
import Sales from "../components/Sales";
import { topratesales } from "../data/data";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
const Welcome = () => {
  return (
     
      <>
      <Navbar />
      <Cart/>
      <Sales endpoint={topratesales} />
      </>
     
  );
};

export default Welcome;
