import React from 'react';
import Typography from 'material-ui/Typography';

const SimpleForm = () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Front end input form
      <Typography variant="subheading">
        This challenge involved replicating the look and functionality of an input form provided in
        a gif. While most of the code was simple enough, I didn&apos;t have much experience
        implementing animation on buttons. Instead I opted to use CSS transitions to color in the
        border of the button. This challenge was done in React.
      </Typography>
      <Typography variant="body2">
        <a href="https://codepen.io/Kiwilicious/pen/RxqWXY?editors=0110" target="_blank" rel="noopener noreferrer">Code here</a>
      </Typography>
    </Typography>
    <Typography variant="display1" gutterBottom>
      Back end Ruby implementation of Erlang
      <Typography variant="subheading">
        This challenge involved taking the code provided in the language Erlang and recreate it in
        Ruby. I had no experience in either language so I skimmed through the Erlang docs. I also
        took some time to learn the basics of Ruby as I had planned on taking up the language it in
        the future. Turns out the logic of the code was simple enough, although I tripped over a few
        times because of syntax. This challenge was done in vanilla Ruby.
      </Typography>
      <Typography variant="body2">
        <a href="https://gist.github.com/dudo/93c0d1ee5b627c2a6cde30616540fb7f" target="_blank" rel="noopener noreferrer">Code in Erlang</a>
        <br />
        <a href="https://gist.github.com/Kiwilicious/3b6728f4276fe7beb14795f830abbebe" target="_blank" rel="noopener noreferrer">Code in Ruby</a>
      </Typography>
    </Typography>
  </div>
);

export default SimpleForm;
