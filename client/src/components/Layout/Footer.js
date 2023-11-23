import React from "react";
import { useTheme } from './Theme'; // Import useTheme hook

const Footer = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <div className={`bg-${theme === 'dark' ? 'dark' : 'light'} text-${theme === 'dark' ? 'light' : 'dark'} p-4 mt-auto`}>
      <h6 className="text-center">All rights reserved &copy; Cyber_Craft.js</h6>
    </div>
  );
};

export default Footer;
