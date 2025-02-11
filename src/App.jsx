import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Menu from "./components/menu";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}

export default App;
