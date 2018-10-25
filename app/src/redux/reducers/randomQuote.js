const initialState = {
  quote: '',
  author: '',
};

const randomQuote = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUOTE':
      return {
        quote: action.quote.quote,
        author: action.quote.author,
      };
    default:
      return state;
  }
};

export default randomQuote;
