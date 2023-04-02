import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carosel from "./components/carosel/Carosel";
import Product from "./components/products/Product";
import AppBar from "./components/shop/header/AppBar";
import Aside1 from "./components/shop/body/Aside1";
import Aside2 from "./components/shop/body/Aside2";
import Main from "./components/shop/body/Main";
import Graph from "./components/graph/Graph";

const App = () => {
  return (
    <section className="rootFile">
      <div className="div1">
        <Navbar />
        <Carosel />
        <Product />
      </div>
      <div className="secondBlock">
        <AppBar />
        <Main />
      </div>
      {/* <Graph /> */}
    </section>
  );
};

export default App;
