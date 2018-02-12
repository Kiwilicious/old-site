import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = () => ({
  color: 'white',
});

const HomePage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item sm={12}>
          <Typography variant="headline">
            I am a Software engineer specializing in frontend web development with a passion
            of making elegant and lightweight single page applications. Also a game
            enthusiast with an interest in the rising prominence of esports.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};


HomePage.propTypes = {
  classes: PropTypes.func.isRequired,
};

export default withStyles(styles)(HomePage);
