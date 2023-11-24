
import React, { createContext, useContext, useState,useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    //getting them from local storage or using light by default
    const storedTheme = localStorage.getItem('theme') || 'light';
    const [Theme, setTheme] = useState(storedTheme);
    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
      };
      useEffect(() => {
        localStorage.setItem('theme', Theme);
      }, [Theme]);
  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.log('useTheme must be used within a ThemeProvider')
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
