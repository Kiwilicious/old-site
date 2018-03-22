import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import HomeIcon from 'material-ui-icons/Home';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
  link: {
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  center: {
    margin: '0 auto',
    maxWidth: 960,
    width: '100%',
  },
});

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.center}>
          <Link to="/" className={classes.link}>
            <IconButton color="inherit" aria-label="Menu">
              <HomeIcon />
            </IconButton>
          </Link>
          <Grid container>
            <Grid item sm={2}>
              <Link to="/" className={classes.link}>
                <Typography variant="title" color="inherit">
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item sm={2}>
              <Link to="/portfolio" className={classes.link}>
                <Typography variant="title" color="inherit">
                  Portfolio
                </Typography>
              </Link>
            </Grid>
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
