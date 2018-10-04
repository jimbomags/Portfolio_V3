const initialState = {
  home: 'green_underline',
  about: '',
  portfolio: '',
  contact: '',
};

const navBar = (state = initialState, action) => {
  switch (action.element) {
    case 'Home':
      return {
        home: 'green_underline',
        about: '',
        portfolio: '',
        contact: '',
      };
      break;
    case 'About':
      return {
        home: '',
        about: 'green_underline',
        portfolio: '',
        contact: '',
      };
      break;
    case 'Portfolio':
      return {
        home: '',
        about: '',
        portfolio: 'green_underline',
        contact: '',
      };
      break;
    case 'Contact':
      return {
        home: '',
        about: '',
        portfolio: '',
        contact: 'green_underline',
      };
      break;
    default:
      return state;
  }
};

export default navBar;
