import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useTheme } from './Theme'; // Import useTheme hook
import './Layout.css';


const Layout = ({ children }) => {
  const { theme } = useTheme(); 
  return (
    <>
       <Header/>
      <div className={`layout ${theme}`}>
      {children}
        </div>
        <Footer/>

      </>
  );
};

export default Layout;