import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} Made by Prashanth Goud</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a 
          href="https://www.linkedin.com/in/prashanth-goud-372485294/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Prashanthgoud15" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
