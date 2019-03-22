const initialState = {
  quote: '',
  author: '',
};

const randomQuote = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUOTE':
      return {
        quote: action.quote.quoteText,
        author: action.quote.quoteAuthor,
      };
    default:
      return state;
  }
};

export default randomQuote;
