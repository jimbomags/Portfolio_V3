const initialState = {
  weatherContent: false,
  location: '',
  condition: '',
  icon: '',
  temp: '',
  error: false,
  errorMessage: '',
  loader: false,
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_WEATHER':
      return {
        ...state,
        weatherContent: true,
        location: action.weatherObj.location.region,
        condition: action.weatherObj.current.condition.text,
        icon: action.weatherObj.current.condition.icon,
        temp: action.weatherObj.current.temp_c,
        loader: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: true,
        errorMessage: action.message,
        loader: false,
      };
    case 'SEARCH_AGAIN':
      return {
        ...initialState,
      };
    case 'DISPLAY_LOADER':
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
};

export default weather;
