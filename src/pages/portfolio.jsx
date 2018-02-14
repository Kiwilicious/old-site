import React from 'react';
import Link from 'gatsby-link';
import Typography from 'material-ui/Typography';

const Portfolio = () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Portfolio
    </Typography>
    <Typography variant="headline" gutterBottom>
      Coding Challenges
      <Typography variant="body2">
        <Link to="/portfolio/tinyChat">Front end chat app</Link>
        <br />
        <Link to="/portfolio/simpleForm">
          Front end input form & Back end Ruby implementation of Erlang
        </Link>
      </Typography>
    </Typography>
    <Typography variant="headline" gutterBottom>
      Coding Snippets
      <Typography variant="body2">
        <a href="https://codepen.io/Kiwilicious/pen/bLGmRq" target="_blank" rel="noopener noreferrer">TwitchTV viewer</a>
        <br />
        <a href="https://codepen.io/Kiwilicious/pen/oBbXyP" target="_blank" rel="noopener noreferrer">Wikipedia viewer</a>
        <br />
        <a href="https://codepen.io/Kiwilicious/pen/KNRXPO" target="_blank" rel="noopener noreferrer">Random quote generator</a>
      </Typography>
    </Typography>
    <Typography variant="headline" gutterBottom>
      Projects
    </Typography>
  </div>
);

export default Portfolio;
