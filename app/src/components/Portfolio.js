import React from 'react';
import { SectionHeader } from './reusable';

const imageArr = [
  {
    url: './assets/snakes&ladders.jpg',
    alt: 'Snakes & Ladders Game',
  },
  {
    url: './assets/weather.jpg',
    alt: 'Weather App',
  },
  {
    url: './assets/bookmark.jpg',
    alt: 'Bookmark App',
  },
  {
    url: './assets/random-quote.jpg',
    alt: 'Random Quote Generator',
  },
];

const PortfolioImages = () => (
  imageArr.map((obj) => {
    const { url, alt } = obj;
    return (
      <div
        style={{ backgroundImage: `url(${url})` }}
        alt={alt}
        key={alt}
      >
        <div id="description-text-container">
          <p>{alt}</p>
        </div>
      </div>
    );
  })
);

const Portfolio = () => (
  <div id="portfolio-container">
    <SectionHeader text="Portfolio" />
    <div id="portfolio-tiles-container">
      <PortfolioImages />
    </div>
  </div>
);

export default Portfolio;
