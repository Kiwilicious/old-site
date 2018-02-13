import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  card: {
    maxHeight: '400px',
  },
  media: {
    height: '200px',
    margin: theme.spacing.unit,
  },
  sectionHeader: {
    margin: theme.spacing.unit,
  },
});

const HomePage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Grid container spacing={16}>
        <Grid item sm={12} xs={12}>
          <Typography variant="display1" gutterBottom>
            Home
          </Typography>
          <Typography variant="subheading">
            My name is James Hwang. I am a Software engineer specializing in frontend web
            development with a passion of making elegant and lightweight single page applications.
            I am also a game enthusiast with an interest in the rising prominence of esports.
          </Typography>
        </Grid>
        <Grid item className={classes.sectionHeader} sm={12} xs={12}>
          <Typography variant="title">
            Recent Projects
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <a
                href="https://github.com/HabitRPG/habitica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  className={classes.media}
                  image="https://preview.ibb.co/k8Go0n/habitica.png"
                  title="Habitica home page"
                />
              </a>
              <Divider />
              <Typography variant="headline">
                Habitica
              </Typography>
              <Typography variant="caption">
                An rpg influenced gaming approach to online task management
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <a
                href="https://github.com/griffanddorks/CARe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  className={classes.media}
                  image="https://preview.ibb.co/e4cd0n/care.png"
                  title="CARe home page"
                />
              </a>
              <Divider />
              <Typography variant="headline">
                CARe
              </Typography>
              <Typography variant="caption">
                Mobile friendly app where cars are handled with care
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.sectionHeader} sm={12} xs={12}>
          <Typography variant="title">
            Recent Coding Snippets
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <a
                href="https://codepen.io/Kiwilicious/pen/bLGmRq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  className={classes.media}
                  image="https://preview.ibb.co/dKSCbS/Twitch_TV_viewer.png"
                  title="TwitchTV viewer"
                />
              </a>
              <Divider />
              <Typography variant="headline">
                TwitchTV viewer
              </Typography>
              <Typography variant="caption">
                A project for Free Code Camp that utilizes the TwitchTV API
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <a
                href="https://codepen.io/Kiwilicious/pen/RxqWXY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardMedia
                  className={classes.media}
                  image="https://preview.ibb.co/nbj3i7/Simple_form.png"
                  title="Simple form"
                />
              </a>
              <Divider />
              <Typography variant="headline">
                Simple form
              </Typography>
              <Typography variant="caption">
                A simple form made in React with a progress dependant button
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
