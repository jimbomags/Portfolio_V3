import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Heading from './Heading';
import BookmarkList from './BookmarkList';
import SubmitBookmarkForm from './SubmitBookmarkForm';
import { setStateFromLS } from '../../redux/action_creators/bookmark';


class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.updateEdit = this.updateEdit.bind(this);
    this.resetFormValue = this.resetFormValue.bind(this);
  }
  componentDidMount() {
    if (window.localStorage.getItem('bookmarks')) {
      this.props.setStateFromLS(JSON.parse(window.localStorage.getItem('bookmarks')));
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  updateEdit(value) {
    this.setState({
      value,
    });
  }
  resetFormValue() {
    this.setState({
      value: '',
    });
  }
  render() {
    return (
      <div id="bookmark-container">
        <Heading />
        <BookmarkList updateEdit={this.updateEdit} />
        <SubmitBookmarkForm
          value={this.state.value}
          handleChange={this.handleChange}
          resetFormValue={this.resetFormValue}
        />
      </div>
    );
  }
}

Bookmark.propTypes = {
  setStateFromLS: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setStateFromLS: (bookmarkArr) => {
    dispatch(setStateFromLS(bookmarkArr));
  },
});

export default connect(null, mapDispatchToProps)(Bookmark);
