const DISPLAY_WEATHER = 'DISPLAY_WEATHER';
const ERROR = 'ERROR';
const SEARCH_AGAIN = 'SEARCH_AGAIN';
const DISPLAY_LOADER = 'DISPLAY_LOADER';

export const displayWeather = weatherObj => ({
  type: DISPLAY_WEATHER,
  weatherObj,
});

export const error = message => ({
  type: ERROR,
  message,
});

export const searchAgain = () => ({
  type: SEARCH_AGAIN,
});

export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});
