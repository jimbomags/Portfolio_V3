import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  type,
  label,
  handleClick,
  id,
  className,
  disabled,
}) => (
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
