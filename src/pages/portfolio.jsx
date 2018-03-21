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
        <Link to="/portfolio/customerRecords">Customer Records</Link>
        <br />
        <Link to="/portfolio/histogramGenerator">Histogram Generator</Link>
        <br />
        <Link to="/portfolio/simpleForm">Simple Form & Ruby/Erlang Translation</Link>
        <br />
        <Link to="/portfolio/chatApp">Chat App</Link>
      </Typography>
    </Typography>
    <Typography variant="headline" gutterBottom>
      Coding Snippets
      <Typography variant="body2">
        <a href="https://codepen.io/Kiwilicious/pen/VQJPyv" target="_blank" rel="noopener noreferrer">JavaScript Calculator</a>
        <br />
        <a href="https://codepen.io/Kiwilicious/pen/bLGmRq" target="_blank" rel="noopener noreferrer">TwitchTV viewer</a>
        <br />
        <a href="https://codepen.io/Kiwilicious/pen/oBbXyP" target="_blank" rel="noopener noreferrer">Wikipedia viewer</a>
        <br />
        <a href="https://codepen.io/Kiwilicious/pen/KNRXPO" target="_blank" rel="noopener noreferrer">Random quote generator</a>
      </Typography>
    </Typography>
    <Typography variant="headline" gutterBottom>
      Projects
      <Typography variant="body2">
        <a href="https://github.com/Kiwilicious/kiwilicious.github.io" target="_blank" rel="noopener noreferrer">Kiwilicious</a>
        <br />
        <a href="https://github.com/HabitRPG/habitica" target="_blank" rel="noopener noreferrer">Habitica</a>
        <br />
        <a href="https://github.com/griffanddorks/CARe" target="_blank" rel="noopener noreferrer">CARe</a>
        <br />
        <a href="https://github.com/friendlyst/friendlyst" target="_blank" rel="noopener noreferrer">Friendlyst</a>
      </Typography>
    </Typography>
  </div>
);

export default Portfolio;
