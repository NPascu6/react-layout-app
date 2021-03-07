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
    marginTop: '5em',
  },
}));

const CustomWeb = ({ setValue, setSelectedIndex }) => {
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
              to="/mobiledevelopment"
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={backArrow} alt="Back to Mobile dev Page" />

            </IconButton>
          </Grid>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2">
                Custom web development
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
              onClick={() => { setValue(2); setSelectedIndex(5); }}
              component={Link}
              to="/about"
              style={{ backgroundColor: 'transparent' }}
            >
              <img src={forwardArrow} alt="Forward to about page" />
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
        <Grid item container direction="row" className={classes.itemContainer} justify="space-around">
          <Grid item container direction="column" md>
            <Grid item style={{ textAlign: 'left' }}>
              <Typography variant="h4">
                Digital documents and data.
              </Typography>
              <Typography variant="body1" paragraph>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                distribution of letters, as opposed to using 'Content here, content
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                here', making it look like readable English.
                Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and the like).
              </Typography>
              <Typography variant="body1" paragraph>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                distribution of letters, as opposed to using 'Content here, content
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                here', making it look like readable English.
                Many desktop publishing packages and web page
                editors now use Lorem Ipsum as their default model text, and
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and the like).
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 260, maxWidth: 280, minHeight: 250 }}
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
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                which don't look even slightly believable. If you are going to use a passage of
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                predefined chunks as necessary, making this the first true generator on the
                Internet.
                It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to generate Lorem Ipsum which
                looks reasonable. The generated Lorem Ipsum is therefore always free from
                repetition,
                injected humour, or non-characteristic words etc.
              </Typography>
              <Typography variant="body1" paragraph>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                which don't look even slightly believable. If you are going to use a passage of
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                predefined chunks as necessary, making this the first true generator on the
                Internet.
                It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to generate Lorem Ipsum which
                looks reasonable. The generated Lorem Ipsum is therefore always free from
                repetition,
                injected humour, or non-characteristic words etc.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomWeb;

CustomWeb.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
