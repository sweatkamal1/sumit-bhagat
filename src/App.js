import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footers from "./components/Footers";
import PoliticalCarrier from "./components/PoliticalCarrier";
import Activities from "./components/Activities";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
function App() {
  return (
    <div>
      <Header />
      <Home/>
      <About />
      <Portfolio />
      <Activities/>
      <PoliticalCarrier/>
      <Contact />
      <Footers/>
    </div>
  );
}

export default App;
