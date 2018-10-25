const ADD_BOOKMARK = 'ADD_BOOKMARK';
const EDIT_BOOKMARK = 'EDIT_BOOKMARK';
const DELETE_BOOKMARK = 'DELETE_BOOKMARK';
const SUBMIT_BOOKMARK = 'SUBMIT_BOOKMARK';
const RESET = 'RESET';
const ERROR = 'ERROR';
const SET_STATE_FROM_LOCAL_STORAGE = 'SET_STATE_FROM_LOCAL_STORAGE';

export const displayAddBookmarkForm = () => ({
  type: ADD_BOOKMARK,
});

export const editBookmark = bookmark => ({
  type: EDIT_BOOKMARK,
  bookmark,
});

export const deleteBookmark = bookmark => ({
  type: DELETE_BOOKMARK,
  bookmark,
});

export const submitBookmark = bookmark => ({
  type: SUBMIT_BOOKMARK,
  bookmark,
});

export const hideSubmitBookmarkForm = () => ({
  type: RESET,
});

export const error = () => ({
  type: ERROR,
});

export const setStateFromLS = bookmarkArr => ({
  type: SET_STATE_FROM_LOCAL_STORAGE,
  bookmarkArr,
});
