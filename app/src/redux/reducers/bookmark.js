/* eslint-disable no-case-declarations */
const initialState = {
  bookmarkArr: ['https://freecodecamp.org', 'https://github.com', 'https://jamesmcgill.surge.sh', 'https://stackoverflow.com'],
  addBookmark: false,
  editBookmark: false,
  bookmarkToEdit: '',
  error: false,
};

const bookmark = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return {
        ...state,
        addBookmark: true,
      };
    case 'DELETE_BOOKMARK':
      window.localStorage.setItem('bookmarks', JSON.stringify(state.bookmarkArr.filter(item => item !== action.bookmark)));
      return {
        ...state,
        bookmarkArr: state.bookmarkArr.filter(item => item !== action.bookmark),
      };
    case 'EDIT_BOOKMARK':
      return {
        ...state,
        editBookmark: true,
        bookmarkToEdit: action.bookmark,
      };
    case 'SUBMIT_BOOKMARK':
      if (state.addBookmark) {
        window.localStorage.setItem('bookmarks', JSON.stringify([...state.bookmarkArr, action.bookmark]));
        return {
          ...state,
          bookmarkArr: [...state.bookmarkArr, action.bookmark],
          addBookmark: false,
          error: false,
        };
      }
      const index = state.bookmarkArr.indexOf(state.bookmarkToEdit);
      const arr1 = state.bookmarkArr.slice(0, index);
      const arr2 = state.bookmarkArr.slice(index + 1);
      window.localStorage.setItem('bookmarks', JSON.stringify([...arr1, action.bookmark, ...arr2]));
      return {
        ...state,
        editBookmark: false,
        bookmarkArr: [...arr1, action.bookmark, ...arr2],
        error: false,
      };
    case 'RESET':
      return {
        ...state,
        addBookmark: false,
        editBookmark: false,
        error: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: true,
      };
    case 'SET_STATE_FROM_LOCAL_STORAGE': {
      return {
        ...state,
        bookmarkArr: action.bookmarkArr,
      };
    }
    default:
      return state;
  }
};

export default bookmark;
