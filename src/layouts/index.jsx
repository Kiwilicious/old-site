import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import NavBar from './navbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffddc1',
      main: '#ffab91',
      dark: '#c97b63',
      contrastText: '#000',
    },
    secondary: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000',
      contrastText: '#fff',
    },
  },
});

const styles = () => ({
  root: {
    fontFamily: 'roboto',
    margin: '0 auto',
    maxWidth: 960,
    padding: '1rem 1rem 1.45rem',
  },
});

const TemplateWrapper = (props) => {
  const { classes, children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Helmet>
          <title>James Hwang&apos;s Portfolio Site</title>
          <meta name="Portfolio Site" content="Aggregation of James&apos; works" />
        </Helmet>

        <Reboot />
        <NavBar />
        <div className={classes.root}>
          {children()}
        </div>
      </div>
    </MuiThemeProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateWrapper);
