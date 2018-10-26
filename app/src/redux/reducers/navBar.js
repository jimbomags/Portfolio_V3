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
    case 'About':
      return {
        home: '',
        about: 'green_underline',
        portfolio: '',
        contact: '',
      };
    case 'Portfolio':
      return {
        home: '',
        about: '',
        portfolio: 'green_underline',
        contact: '',
      };
    case 'Contact':
      return {
        home: '',
        about: '',
        portfolio: '',
        contact: 'green_underline',
      };
    default:
      return state;
  }
};

export default navBar;
