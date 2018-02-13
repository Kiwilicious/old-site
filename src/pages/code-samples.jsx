import React from 'react';
import Link from 'gatsby-link';

const CodeSamples = () => (
  <div>
    WIP
    <p>Below are some of the coding challenges I&apos;ve completed for various companies.</p>
    <div><Link to="/cc-chat">Front end chat app</Link></div>
    <div><Link to="/cc-fsinput">Front end input form & back end implementation</Link></div>

    <hr />
    <p>Sample code</p>
    <br />
    <a href="https://github.com/Kiwilicious/tinychat/blob/master/js/app-main.js" target="_blank" rel="noopener noreferrer">Example</a>
    <br />
    <a href="https://github.com/Kiwilicious/CARe/blob/master/client/app/containers/navBar/NavigationBar.jsx" target="_blank" rel="noopener noreferrer">Example</a>
    <br />
    <a href="https://github.com/Kiwilicious/CARe/blob/master/server/index.js" target="_blank" rel="noopener noreferrer">Example</a>
    <br />
    <a href="https://github.com/Kiwilicious/CARe/blob/master/server/controllers/searchCtrl.js" target="_blank" rel="noopener noreferrer">Example</a>
    <br />
    <a href="https://github.com/Kiwilicious/CARe/blob/master/db/index.js" target="_blank" rel="noopener noreferrer">Example</a>
  </div>
);

export default CodeSamples;
