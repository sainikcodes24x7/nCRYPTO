import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Newsdisplay from "../components/Newsdisplay" ;

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
      <Newsdisplay />
    </>
  );
};

export default Homepage;
