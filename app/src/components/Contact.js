import React from 'react';
import { SectionHeader } from './reusable';

const contactIconsArr = [
  {
    src: './assets/github.png',
    alt: 'James McGill\'s Github Profile',
    href: 'https://github.com/jimbomags',
  },
  {
    src: './assets/mail.png',
    alt: 'E-mail James McGill',
    href: 'mailto:contact@jamesmcgill.co.uk',
  },
  {
    src: './assets/linkedin.png',
    alt: 'James McGill\'s LinkedIn Profile',
    href: 'https://www.linkedin.com/in/james-mcgill-0a997038/',
  },
];

const ContactIcons = () => (
  contactIconsArr.map((obj) => {
    const { src, alt, href } = obj;
    return (
      <a href={href}>
        <img src={src} alt={alt} />
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
