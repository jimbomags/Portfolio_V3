/* eslint-disable object-curly-newline */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../reusable';
import { searchAgain } from '../../redux/action_creators/weather';

const Results = (props) => {
  const { weatherContent, location, condition, icon, temp } = props.weather;
  const display = weatherContent ? 'flex' : 'hidden';

  return (
    <div id="weather-results-container" className={display}>
      <h3>{location}</h3>
      <div id="icon-container">
        <img src={`https:${icon}`} alt={condition} />
      </div>
      <div id="weather-text-info-container">
        <div>{condition}<br /> {temp}°c</div>
      </div>
      <Button handleClick={props.searchAgain} label="Search Again" className="btn-green" />
    </div>
  );
};
Results.propTypes = {
  weather: PropTypes.shape({
    weatherContent: PropTypes.bool.isRequired,
    location: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    error: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loader: PropTypes.bool.isRequired,
  }).isRequired,
  searchAgain: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  searchAgain: () => {
    dispatch(searchAgain());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
