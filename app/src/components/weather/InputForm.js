/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button } from '../reusable';
import { displayWeather, error, displayLoader } from '../../redux/action_creators/weather';

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getUserCoordinates = this.getUserCoordinates.bind(this);
  }
  getCoordinates(event) {
    event.preventDefault();

    this.props.displayLoader();

    try {
      if (!this.state.value) throw new Error('Please enter a location');
      const encodedAddress = encodeURIComponent(this.state.value);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBrX29SqRNyMJOxkzo64rbBDbpBxZASzks`;
      let resultsObj;
      const coordinates = {};

      if (navigator.onLine) {
        fetch(url).then(response => response.text()).then((text) => {
          resultsObj = JSON.parse(text);
          if (resultsObj.status === 'ZERO_RESULTS') {
            return this.props.error('Unable to find that location');
          }
          coordinates.lat = resultsObj.results[0].geometry.location.lat;
          coordinates.long = resultsObj.results[0].geometry.location.lng;
          return this.getWeather(coordinates);
        }).catch((err) => {
          this.props.error(err);
        });
      } else {
        throw new Error('Please check your connection');
      }
    } catch (err) {
      this.props.error(err.message);
    }
  }
  getWeather({ lat, long }) {
    const url = `https://api.apixu.com/v1/current.json?key=0b4ccd28cf7f4c7689d155555173101&q=${lat},${long}`;

    let weatherObj;

    fetch(url).then(response => response.text()).then((text) => {
      weatherObj = JSON.parse(text);
      this.props.displayWeather(weatherObj);
      this.setState({ value: '' });
    }).catch(() => {
      this.props.error('Unable to connect to network');
    });
  }
  getUserCoordinates() {
    this.props.displayLoader();

    const coordinates = {};

    navigator.geolocation.getCurrentPosition((results) => {
      coordinates.lat = results.coords.latitude;
      coordinates.long = results.coords.longitude;

      this.getWeather(coordinates);
    }, () => {
      this.props.error('Unable to locate your position');
    });
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({
      value,
    });
  }
  render() {
    let display = 'flex';
    if (this.props.weather.weatherContent || this.props.weather.loader) {
      display = 'hidden';
    }
    return (
      <form onSubmit={this.getCoordinates} autoComplete="off" className={display} >
        <label htmlFor="weather-input">Search for a location:</label>
        <Input value={this.state.value} id="weather-input" handleChange={this.handleChange} error={this.props.weather.error} errorMessage={this.props.weather.errorMessage} />
        <Button
          label={<img src="./assets/my-location.png" alt="Use my location" title="Use my location" />}
          type="button"
          id="my-location-btn"
          handleClick={this.getUserCoordinates}
        />
        <div className="btn-container">
          <Button label="Search" type="submit" className="btn btn-success" handleClick={this.getCoordinates} />
        </div>
      </form>
    );
  }
}
InputForm.propTypes = {
  displayWeather: PropTypes.func.isRequired,
  error: PropTypes.func.isRequired,
  displayLoader: PropTypes.func.isRequired,
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
};

const mapStateToProps = state => ({
  weather: state.weather,
});

const mapDispatchToProps = dispatch => ({
  displayWeather: (weatherObj) => {
    dispatch(displayWeather(weatherObj));
  },
  error: (errorMessage) => {
    dispatch(error(errorMessage));
  },
  displayLoader: () => {
    dispatch(displayLoader());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
