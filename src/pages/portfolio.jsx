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
          Front end input form & back end Ruby implementation of Erlang
        </Link>
      </Typography>
    </Typography>
    <Typography variant="headline" gutterBottom>
      Coding Snippets
    </Typography>
    <Typography variant="headline" gutterBottom>
      Projects
    </Typography>
  </div>
);

export default Portfolio;
