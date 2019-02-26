import React from 'react';
import { Button } from './reusable';

const handleClick = () => {
  document.querySelector('#about-container').scrollIntoView({behavior: 'smooth', block: 'start'});
};

const HomePage = () => (
  <div id="homepage">
    <h1>James McGill<br /><span>Frontend Developer</span></h1>
    <Button
      id="chevron-down-container"
      className="animated bounce slower infinite"
      type="button"
      label={<i class="fas fa-angle-down"></i>}
      handleClick={handleClick}
    />
  </div>
);

export default HomePage;
