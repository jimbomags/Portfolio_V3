import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../reusable';
import { editBookmark, deleteBookmark } from '../../redux/action_creators/bookmark';

const BookmarkList = (props) => {
  const bookmarkListData = props.bookmarkArr.map(bookmark => (
    <li key={bookmark}>
      <a href={bookmark} target="_blank" rel="noreferrer noopener">{bookmark}</a>
      <div>
        <Button
          label={<img src="./assets/edit.png" alt="edit" />}
          handleClick={() => {
          props.editBookmark(bookmark);
          props.updateEdit(bookmark);
          }}
        />
        <Button label={<img src="./assets/delete.png" alt="delete" />} handleClick={() => props.deleteBookmark(bookmark)} />
      </div>
    </li>
  ));
  return (
    <ul>
      {bookmarkListData}
    </ul>
  );
};

BookmarkList.propTypes = {
  bookmarkArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  editBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  updateEdit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmarkArr: state.bookmark.bookmarkArr,
});

const mapDispatchToProps = dispatch => ({
  editBookmark: (bookmark) => {
    dispatch(editBookmark(bookmark));
  },
  deleteBookmark: (bookmark) => {
    dispatch(deleteBookmark(bookmark));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
