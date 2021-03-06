import React from 'react';
import {
  Grid, Typography, Button, useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  celebration: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.norboOrange,
    fontSize: '1.7rem',
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    width: '12em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '2em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnButton2: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const Services = ({ setSelectedIndex, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="column">
        <Grid item style={{ marginLeft: matchesSM ? '2em' : '5em' }}>
          <Typography variant="h2" gutterBottom align={matchesSM ? 'center' : undefined}>
            Services
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
            margin: matchesSM ? '2em' : '5em',
          }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : 'flex-end'}
          >
            <Grid item style={{ width: matchesSM ? undefined : '20em' }}>
              <Typography variant="h4">Custom iOS & Android development.</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>Extend functionality. Extend access.</Typography>
              <Typography variant="subtitle1">
                Integrate your web app or create a custom
                iOS / Android
                app.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton2}
                component={Link}
                to="/mobiledevelopment"
                onClick={() => { setValue(1); setSelectedIndex(2); }}
              >
                Learn More
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={mobileIcon} alt="iOS & Android development." />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
            margin: matchesSM ? '2em' : '5em',
          }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : undefined}
          >
            <Grid item style={{ width: matchesSM ? undefined : '20em' }}>
              <Typography variant="h4">Custom software development.</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>Save energy. Save time. Save money.</Typography>
              <Typography variant="subtitle1">
                Complete digital sollutions from investigation to
                <span className={classes.celebration}>celebration.</span>
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton2}
                component={Link}
                to="/customsoftware"
                onClick={() => { setValue(1); setSelectedIndex(1); }}
              >
                Learn More
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={customSoftwareIcon} alt="Custom software icon." />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
            margin: matchesSM ? '2em' : '5em',
          }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : 'flex-end'}
            style={{ marginBottom: '6em' }}
          >
            <Grid item style={{ width: matchesSM ? undefined : '20em' }}>
              <Typography variant="h4">Custom websites.</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>Reach more. Discover more.</Typography>
              <Typography variant="subtitle1">
                Optimized for search engines, build for speed.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton2}
                component={Link}
                to="/customwebapplications"
                onClick={() => { setValue(1); setSelectedIndex(3); }}
              >
                Learn More
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
            <Grid item>
              <img className={classes.icon} src={websiteIcon} alt="iOS & Android development." />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default Services;

Services.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
