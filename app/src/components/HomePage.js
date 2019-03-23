import React from 'react';
import { Button } from './reusable';

const handleClick = () => {
  document.querySelector('#portfolio-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const HomePage = () => (
  <div id="homepage" className="container">
    <h1>James McGill<br /><span>Frontend Developer</span></h1>
    <Button
      id="chevron-down-container"
      className="btn btn-success"
      type="button"
      label={<i className="fas fa-angle-down" />}
      handleClick={handleClick}
    />
  </div>
);

export default HomePage;
