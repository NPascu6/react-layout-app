import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid, TextField, Typography, useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  backgroundSTyle: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '55em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.norboOrange,
    borderRadius: 50,
    height: 75,
    width: 245,
    fontSize: 25,
    marginTop: '2em',
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
  messageStyle: {
    border: `1px solid ${theme.palette.common.blue}`,
    marginTop: '2em',
    borderRadius: 10,
  },
  sendButton: {
    ...theme.typography.estimate,
    height: 55,
    width: 275,
    marginTop: '2em',
    fontSize: '1rem',
    borderRadius: 15,
    backgroundColor: theme.palette.common.norboOrange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = ({ setValue, setSelectedIndex }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container direction="row">
        <Grid item container direction="column" lg={3} justify="center" alignItems="center" style={{ marginBottom: '2em', marginTop: '2em' }}>
          <Grid item>
            <Typography
              variant="h2"
              style={{ lineHeight: 1 }}
            >
              Contact me
            </Typography>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue }}
            >
              I am waiting.
            </Typography>
          </Grid>
          <Grid item>
            <Grid item container direction="column" style={{ marginTop: '2em' }}>
              <Grid item container direction="row">
                <Grid item>
                  <img src={phoneIcon} alt="Phone" style={{ marginRight: '0.5em' }} />
                </Grid>
                <Grid item>
                  <Typography
                    varian="body1"
                    style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                  >
                    +41765951562
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item>
                  <img src={emailIcon} alt="Email" style={{ marginRight: '0.5em' }} />
                </Grid>
                <Grid item>
                  <Typography
                    varian="body1"
                    style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                  >
                    norbipascu92@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container style={{ maxWidth: '20em' }} justify="center">
              <Grid item>
                <Grid item>
                  <TextField label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item>
                  <TextField label="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item>
                  <TextField label="Phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Grid>
              </Grid>
              <Grid item style={{ maxWidth: '20em' }}>
                <TextField
                  className={classes.messageStyle}
                  multiline
                  rows={10}
                  value={message}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  InputProps={{ disableUnderline: true }}
                />
              </Grid>
              <Grid item>
                <Button
                  className={classes.sendButton}
                  variant="contained"
                >
                  Send message!
                  <img src={airplane} alt="airplane" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container className={classes.backgroundSTyle} lg={9} alignItems="center">
          <Grid sm item className={classes.textContainer} style={{ marginLeft: matchSM ? '2em' : '5em' }}>
            <Typography variant="h2" align="left">
              Creating custom software since 2015
              <br />
              and counting.
            </Typography>
            <Grid container className={classes.buttonContainer}>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  setSelectedIndex: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
};
