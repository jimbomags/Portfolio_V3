import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '../reusable';
import { displayAddBookmarkForm } from '../../redux/action_creators/bookmark';

const Heading = props => (
  <div id="heading">
    <h1>
      Bookmarks:
    </h1>
    <Button label="Add Bookmark" className="btn btn-success" handleClick={props.displayAddBookmarkForm} />
  </div>
);

Heading.propTypes = {
  displayAddBookmarkForm: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  displayAddBookmarkForm: () => {
    dispatch(displayAddBookmarkForm());
  },
});

export default connect(null, mapDispatchToProps)(Heading);
