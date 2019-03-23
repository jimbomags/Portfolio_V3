import React from 'react';
import { SectionHeader } from './reusable';

const contactIconsArr = [
  {
    icon: 'fab fa-github',
    alt: 'James McGill\'s Github Profile',
    href: 'https://github.com/jimbomags',
  },
  {
    icon: 'fas fa-envelope',
    alt: 'E-mail James McGill',
    href: 'mailto:contact@jamesmcgill.co.uk',
  },
  {
    icon: 'fab fa-linkedin',
    alt: 'James McGill\'s LinkedIn Profile',
    href: 'https://www.linkedin.com/in/james-mcgill-0a997038/',
  },
];

const ContactIcons = () => (
  contactIconsArr.map((obj) => {
    const { icon, alt, href } = obj;
    return (
      <a href={href} key={alt}>
        <i className={icon} alt={alt} />
      </a>
    );
  })
);

const Contact = () => (
  <div id="contact-container">
    <SectionHeader text="Contact" />
    <div id="contact-icons-container">
      <ContactIcons />
    </div>
  </div>
);

export default Contact;
