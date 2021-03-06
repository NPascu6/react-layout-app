import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: '1304',
    position: 'relative',
  },
  adorment: {
    verticalAlign: 'bottom',
    height: '15em',
    [theme.breakpoints.down('md')]: {
      height: '13em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '10em',
    },
  },
  gridContainer: {
    position: 'absolute',
  },
  linkFooter: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '2em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2em',
    },
  },
  socialIconsContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

const Footer = ({
  setValue, selectedIndex, setSelectedIndex,
}) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          className={classes.gridContainer}
        >
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid
                component={Link}
                selected={selectedIndex === 0}
                onClick={() => { setValue(0); }}
                to="/"
                item
                className={classes.linkFooter}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              spacing={2}
              direction="column"
            >
              <Grid
                item
                className={classes.linkFooter}
                component={Link}
                selected={selectedIndex === 0}
                onClick={() => { setValue(1); setSelectedIndex(0); }}
                to="/mobiledevelopment"
              >
                iOS & Android development
              </Grid>
              <Grid
                item
                className={classes.linkFooter}
                component={Link}
                to="/customsoftware"
                onClick={() => { setValue(1); setSelectedIndex(1); }}
              >
                Software Development
              </Grid>
              <Grid
                item
                className={classes.linkFooter}
                onClick={() => { setValue(1); setSelectedIndex(2); }}
                component={Link}
                to="/customwebapplications"
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid
                item
                className={classes.linkFooter}
                component={Link}
                onClick={() => { setValue(2); }}
                to="/about"
              >
                About
              </Grid>
              <Grid
                item
                className={classes.linkFooter}
                component={Link}
                onClick={() => { setValue(2); }}
                to="/about"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.linkFooter}
                onClick={() => { setValue(2); }}
                component={Link}
                to="/about"
              >
                Tech Stack
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            className={classes.gridItem}
          >
            <Grid
              container
              direction="column"
              spacing={2}
            >
              <Grid
                item
                className={classes.linkFooter}
                onClick={() => { setValue(3); }}
                component={Link}
                to="/contact"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.linkFooter}
                onClick={() => { setValue(3); }}
                component={Link}
                to="/contact"
              >
                Contact
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adorment}
      />
      <Grid
        justify="flex-end"
        spacing={2}
        container
        className={classes.socialIconsContainer}
      >
        <Grid item component="a" href="https://www.facebook.com/Norbi Pascu" rel="noopener noreferrer" target="_blank">
          <img src={facebook} alt="facebookLogo" className={classes.icon} />
        </Grid>
        <Grid item component="a" href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="twitterLogo" className={classes.icon} />
        </Grid>
        <Grid item component="a" href="https://www.instagram.com/norbipascu" rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt="instagramLogo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  // value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};
