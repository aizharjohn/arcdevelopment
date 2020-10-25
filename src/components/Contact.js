import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
} from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  // rowContainer: {
  //   paddingLeft: '5em',
  //   paddingRight: '5em',
  //   [theme.breakpoints.down('sm')]: {
  //     paddingLeft: '1.5em',
  //     paddingRight: '1.5em',
  //   },
  // },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 80,
    width: 205,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid Email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid Phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                style={{ lineHeight: 1 }}
                variant="h2"
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {' '}
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="mailto:johndoe@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {' '}
                    johndoe@gmail.com{' '}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                id="message"
                fullWidth
                multiline
                rows={10}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: '2em' }}>
              <Button
                //disabled={
                //name.length === 0 ||
                //message.length === 0 ||
                //phoneHelper.length !== 0 ||
                //emailHelper.length !== 0
                //}
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message{' '}
                <img
                  src={airplane}
                  alt="airplane"
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: '20em' }}>
            <TextField
              InputProps={{ disableUnderline: true }}
              value={message}
              className={classes.message}
              id="message"
              fullWidth
              multiline
              rows={10}
              onChange={(event) => setMessage(event.target.value)}
            />
          </Grid>
          <Grid item container style={{ marginTop: '2em' }} alignItems="center">
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                //disabled={
                //name.length === 0 ||
                //message.length === 0 ||
                //phoneHelper.length !== 0 ||
                //emailHelper.length !== 0
                //}
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message{' '}
                <img
                  src={airplane}
                  alt="airplane"
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant="subtitle2"
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? 'center' : undefined} item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(2);
                  }}
                >
                  <span style={{ marginRight: 5 }}> Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;