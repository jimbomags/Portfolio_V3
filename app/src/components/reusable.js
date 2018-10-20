/* eslint-disable object-curly-newline  */

import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, label, handleClick, id, className, disabled }) => (
  <button id={id} className={className} onClick={handleClick} type={type} disabled={disabled} >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  id: 'button',
  className: 'btn',
  disabled: '',
};

export const SectionHeader = ({ text }) => (
  <div className="section-header">
    <div className="dark-line" />
    <div className="light-line" />
    <h2>{text}</h2>
    <div className="dark-line" />
    <div className="light-line" />
  </div>
);

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export const Input = ({ value, id, handleChange, error, errorMessage }) => {
  let hidden = 'hidden';
  let errorInput;
  if (error) {
    hidden = null;
    errorInput = 'error-input';
  }
  return (
    <div className="input-container">
      <input value={value} id={id} onChange={handleChange} className={errorInput} />
      <span className={`error-span ${hidden}`}>{errorMessage}</span>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

Input.defaultProps = {
  id: null,
};

export const Loader = ({ dispayLoader }) => {
  const display = dispayLoader ? 'flex' : 'hidden';
  return (
    <div className={`${display} loader`} />
  );
};

Loader.propTypes = {
  dispayLoader: PropTypes.bool.isRequired,
};
