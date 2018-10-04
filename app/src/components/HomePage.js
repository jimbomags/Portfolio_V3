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
      type="button"
      label={<img src="./assets/chevron_down.png" alt="scroll down" />}
      handleClick={handleClick}
    />
  </div>
);

export default HomePage;
