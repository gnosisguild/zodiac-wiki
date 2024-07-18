// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '3rem', textAlign: 'center', color: '#666'}}>
      <p>
        {new Date().getFullYear()} Zodiac Wiki&nbsp;|&nbsp;
        <a href="/disclaimer" style={{ textDecoration: 'underline', color: 'inherit' }}>Disclaimer</a>&nbsp;·&nbsp;
        <a href="https://github.com/gnosisguild/zodiac-wiki" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>GitHub</a>
      </p>
      <p>
        Content is available under&nbsp;
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
          Creative Commons Attribution-ShareAlike
        </a>
      </p>
    </footer>
  );
};

export default Footer;
