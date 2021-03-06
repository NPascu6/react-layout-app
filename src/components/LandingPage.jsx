import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  Grid, Button, Typography, useMediaQuery, Card, CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import animationData from '../animations/landinganimation/data.json';
import ButtonArrow from './ui/ButtonArrow';
import CallToAction from './ui/CallToAction';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import repeatingBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    marginTop: '1em',
    marginBottom: '5em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.norboOrange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  textContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
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
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '6em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  cardBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  cardClass: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
  infoBackgroundClass: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <Grid
        container
        direction="column"
        className={classes.mainContainer}
      >
        <Grid item>
          <Grid
            container
            justify="flex-end"
            direction="row"
            alignItems="center"
          >
            <Grid sm item className={classes.textContainer}>
              <Typography variant="h2" align="center">
                Creating custom software since 2015
                <br />
                and counting.
              </Typography>
              <Grid container justify="center" className={classes.buttonContainer}>
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                    component={Link}
                    to="/estimate"
                    onClick={() => { setValue(5); setSelectedIndex(5); }}
                  >
                    Free Estimate

                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/about"
                    onClick={() => { setValue(2); setSelectedIndex(5); }}
                  >
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sm
              item
              className={classes.animation}
            >
              <Lottie options={defaultOptions} height="100%" width="100%" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '2em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : undefined}
          >
            <Grid item>
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
          style={{ marginRight: matchesSM ? 0 : '2em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : 'flex-end'}
          >
            <Grid item>
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
          style={{ marginLeft: matchesSM ? 0 : '2em', textAlign: matchesSM ? 'center' : undefined }}
        >
          <Grid
            container
            direction="row"
            className={classes.servicesContainer}
            justify={matchesSM ? 'center' : undefined}
          >
            <Grid item>
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
        <Grid item>
          <Grid container alignItems="center" justify="center" style={{ height: '50em', marginTop: '2em' }}>
            <Card className={classes.cardClass}>
              <CardContent>
                <Grid container direction="column" style={{ textAlign: 'center' }}>
                  <Grid item>
                    <Typography variant="h3">
                      Background
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Experience and patience is the key for success.
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButton2}
                      component={Link}
                      to="/about"
                      onClick={() => { setValue(2); setSelectedIndex(5); }}
                    >
                      Learn More
                      <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.cardBackground} />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            style={{ height: '40em' }}
            direction="row"
            alignItems="center"
          >
            <Grid item container style={{ position: 'absolute' }} direction={matchesXS ? 'column' : 'row'}>
              <Grid item sm style={{ marginLeft: matchesXS ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'left', marginRight: matchesXS ? '2em' : '5em' }}>
                <Grid container direction="column" style={{ marginBottom: matchesXS ? '2em' : '4em' }}>
                  <Typography variant="h2" style={{ color: 'white' }}>About me.</Typography>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  <Typography variant="subtitle2">Let's get personal.</Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      style={{ color: 'white', borderColor: 'white' }}
                      className={classes.learnButton2}
                      component={Link}
                      to="/about"
                      onClick={() => { setValue(3); setSelectedIndex(5); }}
                    >
                      Learn More
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm style={{ marginRight: matchesXS ? '2em' : '5em', textAlign: matchesXS ? 'center' : 'right', marginLeft: matchesXS ? '2em' : '5em' }}>
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: 'white' }}>Say Hello!😸 </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      style={{ color: 'white', borderColor: 'white' }}
                      className={classes.learnButton2}
                      component={Link}
                      to="/contact"
                      onClick={() => { setValue(2); setSelectedIndex(5); }}
                    >
                      Learn More
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackgroundClass} />
          </Grid>
        </Grid>
        <Grid item>
          <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;

LandingPage.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
