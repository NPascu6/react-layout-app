import Lottie from 'react-lottie';
import React from 'react';
import {
  Grid, Typography, Card, CardContent, useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import vision from '../assets/vision.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
  },
  cardClass: {
    margin: '5em',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    paddtigTop: '2em',
    paddingRight: '10em',
    paddingLeft: '10em',
    paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '4em',
      paddingBottom: '4em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      marginLeft: '0em',
      marginRight: '0em',

    },
  },
  visionIcon: {
    marginTop: '2em',
    marginBottom: '2em',
    maxHeight: '15em',
    [theme.breakpoints.down('sm')]: {
      maxHeight: '8em',
    },
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid item>
        <Grid container alignItems="center" justify="center" style={{ marginTop: '2em' }}>
          <Card className={classes.cardClass}>
            <CardContent>
              <Card className={classes.cardClass2}>
                <CardContent>
                  <Grid container direction="column" justify="center">
                    <Grid item>
                      <Typography variant="h2" align="center">
                        About
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        align="center"
                        variant="h4"
                        className={classes.missionStatement}
                      >
                        Our mission is to implement cool new applications
                        with the latest tech stack and feautres.
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Grid item style={{ marginTop: '2em', marginBottom: '2em' }}>
                <Typography variant="h2" style={{ fontFamily: 'Pacifico' }} align="center">
                  Revolutionary software
                </Typography>
              </Grid>
              <Grid item container direction="row" alignItems="center" style={{ marginTop: '2em', marginBottom: '2em' }}>
                <Grid container direction="column" lg align="center">
                  <Grid item lg>
                    <img src={vision} alt="Vision Icon" className={classes.visionIcon} />
                  </Grid>
                </Grid>
                <Grid item container direction="column" lg>
                  <Grid item align={matchSM || matchMD ? 'center' : 'right'}>
                    <Typography variant="h4" gutterBottom>Vision</Typography>
                  </Grid>
                  <Grid item align={matchSM || matchMD ? 'center' : 'right'}>
                    <Typography variant="body1">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s,
                      when an unknown printer took a galley of type and scrambled it to make a
                      type
                      specimen book. It has survived not only five centuries, but also the
                      leap into
                      electronic typesetting, remaining essentially unchanged. It was
                      popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum
                      passages,
                      and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container direction="row" alignItems="center" style={{ marginTop: '5em', marginBottom: '2em' }}>
                <Grid item container direction="column" lg>
                  <Grid item align={matchSM || matchMD ? 'center' : 'left'}>
                    <Typography variant="h4" gutterBottom>Technology</Typography>
                  </Grid>
                  <Grid item align={matchSM || matchMD ? 'center' : 'left'}>
                    <Typography variant="body1">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      {/* eslint-disable-next-line react/no-unescaped-entities */}
                      Lorem Ipsum has been the industry's standard dummy text ever since the
                      1500s,
                      when an unknown printer took a galley of type and scrambled it to make a
                      type
                      specimen book. It has survived not only five centuries, but also the
                      leap into
                      electronic typesetting, remaining essentially unchanged. It was
                      popularised in
                      the 1960s with the release of Letraset sheets containing Lorem Ipsum
                      passages,
                      and more recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container direction="column" lg align="center" style={{ marginTop: '-2em' }}>
                  <Grid item align="center">
                    <Lottie options={defaultOptions} style={{ maxWidth: '30em' }} />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
