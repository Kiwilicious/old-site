import 'typeface-roboto';
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import NavBar from './navbar';

const styles = () => ({
  root: {
    fontFamily: 'roboto',
    margin: '0 auto',
    maxWidth: 960,
    padding: '0px 1rem 1.45rem',
  },
});

const TemplateWrapper = (props) => {
  const { classes, children } = props;
  return (
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
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  classes: PropTypes.func.isRequired,
};

export default withStyles(styles)(TemplateWrapper);
