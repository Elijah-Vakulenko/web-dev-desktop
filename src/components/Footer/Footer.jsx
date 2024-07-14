import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <footer>
      <p className="copy">
        All rights reserved. Elijah Vakulenko &copy; <span>{currentYear}</span>
      </p>
    </footer>
  );
};

export default Footer;
