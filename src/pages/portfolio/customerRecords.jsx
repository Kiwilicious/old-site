import React from 'react';
import Typography from 'material-ui/Typography';

const CustomerRecords = () => (
  <div>
    <Typography variant="display1" gutterBottom>
      Customer Records
    </Typography>
    <Typography variant="subheading">
      This challenge involved taking in a list of customers and printing out those that are within
      100km of the business. The input, in the form of separate JSON objects, was read line by line
      and filtered based on their distance to the central point. The challenge was quite enjoyable
      since it seems realistic and useful enough to be of actual use. This challenge was done in
      Node.js and outputs to the terminal.
    </Typography>
    <Typography variant="body2">
      <a href="https://github.com/Kiwilicious/customer-records" target="_blank" rel="noopener noreferrer">Code here</a>
    </Typography>
  </div>
);

export default CustomerRecords;
