import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from './reusable';
import getQuote from '../redux/action_creators/randomQuote';

class RandomQuote extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getQuote();
  }
  render() {
    return (
      <div id="random-quote-container">
        <div id="quote-text">
          <div id="quote">
            <p>{`"${this.props.randomQuote.quote}"`}</p>
          </div>
          <div id="author"><span>{`-${this.props.randomQuote.author}`}</span></div>
          <div id="button-container">
            <Button label="Get Quote" handleClick={this.props.getQuote} className="btn btn-success" />
          </div>
        </div>
      </div>
    );
  }
}

RandomQuote.propTypes = {
  randomQuote: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  getQuote: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  randomQuote: state.randomQuote,
});

const mapDispatchToProps = dispatch => ({
  getQuote: () => {
    fetch('https://cors-anywhere.herokuapp.com/https://quota.glitch.me/random').then(response => response.text()).then((text) => {
      dispatch(getQuote(JSON.parse(text)));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
