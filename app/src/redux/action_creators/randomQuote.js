const GET_QUOTE = 'GET_QUOTE';

const getQuote = quote => ({
  type: GET_QUOTE,
  quote,
});

export default getQuote;
