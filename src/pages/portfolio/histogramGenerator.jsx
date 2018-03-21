import React from 'react';
import Typography from 'material-ui/Typography';

const HistogramGenerator = () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Histogram Generator
    </Typography>
    <Typography variant="subheading">
      This challenge involved producing a histogram based on events for a specific email. The
      function takes in a list of events for the targeted email, checks if the event was from a
      valid email, and adds to the histogram if valid. The histogram is divided by hours and each
      bar represents the activity level at that time. The bars are then normalized based on the
      busiest hour(s).
    </Typography>
    <Typography variant="body2">
      <a href="https://gist.github.com/Kiwilicious/1c6b00cb58b56b12c6eadc7b9c04038d" target="_blank" rel="noopener noreferrer">Code here</a>
    </Typography>
  </div>
);

export default HistogramGenerator;
