import React from "react";
import Home, { username, city } from "./Home";
import NavBar from "./NavBar";
import About, { image } from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
