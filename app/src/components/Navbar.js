/* eslint-disable no-useless-constructor, class-methods-use-this, no-class-assign */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import navBar from '../redux/action_creators/navBar';
import { Button } from './reusable';

const elementIsInView = (elementId) => {
  const { top, bottom } = document.querySelector(elementId).getBoundingClientRect();
  if (elementId === '#contact-container' && top < 350) {
    return true;
  } else if (top <= 50 && bottom > 50) {
    return true;
  }
  return false;
};

const navbarText = [{
  id: '#homepage',
  text: 'Home',
},
{
  id: '#about-container',
  text: 'About',
},
{
  id: '#portfolio-container',
  text: 'Portfolio',
},
{
  id: '#contact-container',
  text: 'Contact',
},
];

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const { updateGreenUnderline } = this.props;
      if (elementIsInView('#contact-container')) {
        updateGreenUnderline('Contact');
      } else if (elementIsInView('#homepage')) {
        updateGreenUnderline('Home');
      } else if (elementIsInView('#about-container')) {
        updateGreenUnderline('About');
      } else if (elementIsInView('#portfolio-container')) {
        updateGreenUnderline('Portfolio');
      }
    });
  }
  scrollIntoView(element) {
    document.querySelector(element).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    const { greenLine } = this.props;
    const greenLineObjKeys = Object.keys(greenLine);
    const NavbarLinks = () => (
      navbarText.map((link, index) => (
        <Button
          className={greenLine[greenLineObjKeys[index]]}
          handleClick={() => {
            this.scrollIntoView(link.id);
          }}
          label={link.text}
          key={link.text}
        />
      ))
    );

    return (
      <nav>
        <ul>
          <NavbarLinks />
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  updateGreenUnderline: PropTypes.func.isRequired,
  greenLine: PropTypes.shape({
    home: PropTypes.oneOf(['green_underline', '']),
    about: PropTypes.oneOf(['green_underline', '']),
    portfolio: PropTypes.oneOf(['green_underline', '']),
    contact: PropTypes.oneOf(['green_underline', '']),
  }).isRequired,
};

const mapStateToProps = state => ({
  greenLine: state,
});

const mapDispatchToProps = dispatch => ({
  updateGreenUnderline: (element) => {
    dispatch(navBar(element));
  },
});

Navbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default Navbar;
