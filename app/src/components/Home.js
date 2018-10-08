import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SnakesAndLadders from './snakes_&_ladders/SnakesAndLadders';

const Home = () => (
  <div>
    <header>
      <Navbar />
      <HomePage />
    </header>
    <main>
      <About />
      <Portfolio />
      <Contact />
      <SnakesAndLadders />
    </main>
  </div>
);

export default Home;
