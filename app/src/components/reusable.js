import React from 'react';

export const Button = ({
  type,
  label,
  handleClick,
  id,
  className
}) => (
  <button id={id} className={className} onClick={handleClick} type={type} >
    {label}
  </button>
);

export const SectionHeader = ({ text }) => (
  <div className="section-header">
    <div className="dark-line" />
    <div className="light-line" />
    <h2>{text}</h2>
    <div className="dark-line" />
    <div className="light-line" />
  </div>
);
