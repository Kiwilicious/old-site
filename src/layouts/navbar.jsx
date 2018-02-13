import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import HomeIcon from 'material-ui-icons/Home';

const styles = theme => ({
  root: {
    width: '100%',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  icon: {
    margin: theme.spacing.unit,
  },
});

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={16} justify="center">
            <Grid item sm={2}>
              <Link to="/code-samples" className={classes.link}>
                <Typography variant="title" color="inherit">
                  Code Samples
                </Typography>
              </Link>
            </Grid>
            <Link to="/" className={classes.link}>
              <HomeIcon className={classes.icon} />
            </Link>
            <Grid item sm={2}>
              <Link to="/contact" className={classes.link}>
                <Typography variant="title" color="inherit">
                  Contact
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
