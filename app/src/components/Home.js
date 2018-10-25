import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import SnakesAndLadders from './snakes_&_ladders/SnakesAndLadders';
import Weather from './weather/Weather';
import Bookmark from './bookmark/Bookmark';
import RandomQuote from './RandomQuote';

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
      <Weather />
      <Bookmark />
      <RandomQuote />
    </main>
  </div>
);

export default Home;
