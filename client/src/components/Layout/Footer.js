import React from "react";
import {useTheme} from '../../context/themeContext'

const Footer = () => {
  const {theme} = useTheme();
  return (
    <div className={`bg-${theme === 'light' ? 'dark' : 'light'} text-${theme === 'light' ? 'light' : 'dark'} p-4 mt-auto`}>
      <h6 className="text-center">All rights reserved &copy; Cyber_Craft.js</h6>
    </div>
  );
};

export default Footer;