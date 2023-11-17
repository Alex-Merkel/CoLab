import React from 'react';

const Footer = () => {
  // Get current year:
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer w-full p-4 d-flex align-items-center justify-content-center">
      <p className="text-center">
        &copy; {currentYear} Alex Merkel. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
