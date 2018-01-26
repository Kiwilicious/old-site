import React from 'react';
import Link from 'gatsby-link';

const TinyChatChallenge = () => (
  <div>
    <div><Link to="/coding-challenges">Back to coding challenges</Link></div>
    <div>
      <h2>Chat Application</h2>
      <p>
        This challenge involved taking the small boilerplate template provided and designing the
        client side of a simple chat app. There was a dummy python server provided but due to
        issues, I substituted it for a node/express server instead. This challenge was done in
        vanilla HTML with jQuery.
      </p>
      <a href="https://github.com/Kiwilicious/tinychat" target="_blank" rel="noopener noreferrer">Code here</a>
    </div>
  </div>
);

export default TinyChatChallenge;
