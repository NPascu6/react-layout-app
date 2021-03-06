import React from 'react';
// import { Lottie } from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, IconButton,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import cash from '../assets/cash.svg';
import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';

const useStyles = makeStyles(() => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    paddingTop: '2em',
    paddingRight: '3em',
    paddingLeft: '3em',
    paddingBottom: '5em',
    textAlign: 'center',
  },
  itemContainer: {
    maxWidth: '40em',
  },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container direction="row" justify="center">
          <Grid item className={classes.arrowContainer}>
            <IconButton
              onClick={() => { setValue(1); setSelectedIndex(0); }}
              component={Link}
              to="/services"
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={backArrow} alt="Back to Services Page" />

            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2">
                Custom software development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Wheter we're replacing old software or inventing new solutions,
                Norbert Pascu development is here to help your business grow with technology.
              </Typography>
              <Typography variant="body1" paragraph>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Wheter we're replacing old software or inventing new solutions,
                Norbert Pascu development is here to help your business grow with technology.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Wheter we're replacing old software or inventing new solutions,
                Norbert Pascu development is here to help your business grow with technology.
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Wheter we're replacing old software or inventing new solutions,
                Norbert Pascu development is here to help your business grow with technology.
              </Typography>
              <Typography variant="body1" paragraph>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Wheter we're replacing old software or inventing new solutions.
              </Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              onClick={() => { setValue(1); setSelectedIndex(2); }}
              component={Link}
              to="/mobiledevelopment"
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={forwardArrow} alt="Forward to IOS dev page" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item container direction="column" md style={{ marginTop: '2em' }}>
            <Grid item>
              <Typography variant="h4">
                Save time.
              </Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="stopwatch" />
            </Grid>
          </Grid>
          <Grid item container direction="column" md style={{ marginTop: '2em' }}>
            <Grid item>
              <Typography variant="h4">
                Save energy.
              </Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="lightbulb" />
            </Grid>
          </Grid>
          <Grid item container direction="column" md style={{ marginTop: '2em' }}>
            <Grid item>
              <Typography variant="h4">
                Save money.
              </Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="cash" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" className={classes.itemContainer}>
          <Grid item container direction="column" md>
            <Grid item style={{ textAlign: 'left' }}>
              <Typography variant="h4">
                Digital documents and data.
              </Typography>
              <Typography variant="body1" paragraph>
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
              </Typography>
              <Typography variant="body1" paragraph>
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">
                Scan.
              </Typography>
              <Typography variant="body1" paragraph>
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
              </Typography>
              <Typography variant="body1" paragraph>
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
                Digital documents and data.Digital documents and data.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomSoftware;

CustomSoftware.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
