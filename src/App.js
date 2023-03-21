import React from "react";

import Home from "./components/Home";

import "./App.css";
import Header from "./components/Header";
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Videos />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
