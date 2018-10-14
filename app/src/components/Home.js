import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Weather from './weather/Weather';

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
      <Weather />
    </main>
  </div>
);

export default Home;
