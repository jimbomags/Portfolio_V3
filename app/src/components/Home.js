import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

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
    </main>
  </div>
);

export default Home;
