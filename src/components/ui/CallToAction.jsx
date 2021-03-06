import React from 'react';
import {
  Grid, Typography, Button, useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '1.2rem',
    height: 45,
    padding: 5,
    [theme.breakpoints.down('sm')]:
    {
      marginBottom: '2em',
    },
  },
  backGround: {
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40em',
    width: '100%',
    [theme.breakpoints.down('md')]:
    {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: '1.5rem',
    backgroundColor: theme.palette.common.norboOrange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid
        container
        style={{ alignItems: 'center' }}
        justify={matchesSM ? 'center' : 'space-between'}
        className={classes.backGround}
        direction={matchesSM ? 'column' : 'row'}
      >
        <Grid item style={{ marginLeft: matchesSM ? '0em' : '5em' }}>
          <Grid container direction="column">
            <Grid item style={{ textAlign: matchesXS ? 'center' : 'left' }}>
              <Typography variant="h2">
                Simple software & fast results.
              </Typography>
              <Typography variant="subtitle2">
                Take advantage of the 21st century.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/about"
                onClick={() => { setValue(2); setSelectedIndex(5); }}
              >
                Learn More
                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? '0em' : '5em' }}>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => { setValue(5); setSelectedIndex(5); }}
          >
            Free estimate

          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CallToAction;

CallToAction.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
