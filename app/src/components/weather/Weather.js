import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import Results from './Results';
import { Loader } from '../reusable';

const Weather = ({ loader }) => (
  <div id="weather-container">
    <InputForm />
    <Loader dispayLoader={loader} />
    <Results />
  </div>
);

Weather.propTypes = {
  loader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loader: state.weather.loader,
});

export default connect(mapStateToProps, null)(Weather);
