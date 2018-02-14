import React from 'react';
import Typography from 'material-ui/Typography';

const TinyChat = () => (
  <div>
    <Typography variant="display1" gutterButton>
      Front end chat app
      <Typography variant="subheading">
        This challenge involved taking the small boilerplate template provided and designing the
        client side of a simple chat app. There was a dummy python server provided but due to
        issues, I substituted it for a node/express server instead. This challenge was done in
        vanilla HTML with jQuery.
      </Typography>
      <Typography>
        <a href="https://github.com/Kiwilicious/tinychat" target="_blank" rel="noopener noreferrer">Code here</a>
      </Typography>
    </Typography>
  </div>
);

export default TinyChat;
