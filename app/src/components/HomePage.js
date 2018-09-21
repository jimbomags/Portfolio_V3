import React from 'react';
import { Button } from './reusable';

const HomePage = () => (
  <div id="homepage">
    <h1>James McGill<br /><span>Frontend Developer</span></h1>
    <Button
      id="chevron-down-container"
      type="button"
      label={<img src="./assets/chevron_down.png" alt="scroll down" />}
    />
  </div>
);

export default HomePage;
