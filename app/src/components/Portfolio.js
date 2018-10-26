import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from './reusable';

const portfolioDataArr = [
  {
    linkURL: '/snakesandladders',
    imageURL: './assets/snakes&ladders.jpg',
    alt: 'Snakes & Ladders Game',
  },
  {
    linkURL: '/weather',
    imageURL: './assets/weather.jpg',
    alt: 'Weather App',
  },
  {
    linkURL: '/bookmark',
    imageURL: './assets/bookmark.jpeg',
    alt: 'Bookmark App',
  },
  {
    linkURL: '/randomquote',
    imageURL: './assets/random-quote.jpg',
    alt: 'Random Quote Generator',
  },
];

const PortfolioTiles = () => (
  portfolioDataArr.map((obj) => {
    const { imageURL, alt, linkURL } = obj;
    return (
      <Link to={linkURL} key={alt}>
        <div
          style={{ backgroundImage: `url(${imageURL})` }}
          alt={alt}
        >
          <div id="description-text-container">
            <p>{alt}</p>
          </div>
        </div>
      </Link>
    );
  })
);

const Portfolio = () => (
  <div id="portfolio-container">
    <SectionHeader text="Portfolio" />
    <div id="portfolio-tiles-container">
      <PortfolioTiles />
    </div>
  </div>
);

export default Portfolio;
