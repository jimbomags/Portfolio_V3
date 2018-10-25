/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import checkUrl from 'valid_url';
import { connect } from 'react-redux';
import { Button, Input } from '../reusable';
import { submitBookmark, hideSubmitBookmarkForm, error } from '../../redux/action_creators/bookmark';

const SubmitBookmarkForm = (props) => {
  const display = props.bookmark.addBookmark || props.bookmark.editBookmark ? 'flex' : 'hidden';
  const text = props.bookmark.addBookmark ? 'Add' : 'Edit';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!checkUrl(props.value)) {
      props.error();
      return;
    }
    props.submitBookmark(props.value);
    props.resetFormValue();
  };

  return (
    <div id="form-container" className={display}>
      <form onSubmit={handleSubmit}>
        <div id="label-container">
          <label htmlFor="bookmark-input">{`${text} Bookmark:`}</label>
        </div>
        <Input value={props.value} handleChange={props.handleChange} id="bookmark-input" error={props.bookmark.error} errorMessage="Please Enter a Valid URL" />
        <div>
          <Button
            label="Cancel"
            handleClick={() => {
            props.resetFormValue();
            props.hideSubmitBookmarkForm();
            }}
            className="btn-red"
          />
          <Button type="submit" label="Submit" className="btn-green" handleClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

SubmitBookmarkForm.propTypes = {
  bookmark: PropTypes.shape({
    bookmarkArr: PropTypes.arrayOf(PropTypes.string),
    addBookmark: PropTypes.bool,
    editBookmark: PropTypes.bool,
    bookmarkToEdit: PropTypes.string,
    error: PropTypes.bool,
  }).isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  submitBookmark: PropTypes.func.isRequired,
  resetFormValue: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  hideSubmitBookmarkForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookmark: state.bookmark,
});

const mapDispatchToProps = dispatch => ({
  submitBookmark: (bookmark) => {
    dispatch(submitBookmark(bookmark));
  },
  hideSubmitBookmarkForm: () => {
    dispatch(hideSubmitBookmarkForm());
  },
  error: () => {
    dispatch(error());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitBookmarkForm);
