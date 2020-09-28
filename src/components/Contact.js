import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

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
  learnBotton: {
    ...theme.typography.learnBotton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.Orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.Blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendBottom: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.Orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
}));
const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setEmailHelper('invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setPhoneHelper('invalid Phone');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };
  return (
    <Grid item container direction='row'>
      <Grid
        item
        container
        justify='center'
        direction='column'
        alignItems='center'
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h2'
                style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.Blue }}>
                We're wating.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    color: theme.palette.common.Blue,
                    fontSize: '1rem',
                  }}>
                  <a
                    href='#tel:9708855861'
                    style={{ textDecoration: 'none', color: 'inherit' }}>
                    (+91) 9708855851
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottm: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='email'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  style={{
                    color: theme.palette.common.Blue,
                    fontSize: '1rem',
                  }}>
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href='mailto:mdriyazuddine17@gmail.com'>
                    mdriyazuddine17@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  label='Name'
                  value={name}
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label='Email'
                  value={email}
                  id='email'
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label='Phone'
                  value={phone}
                  id='phone'
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                id='message'
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                placeholder='message'
                rows={8}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container style={{ marginTop: '2em' }} justify='center'>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                className={classes.sendBottom}
                onClick={() => setOpen(true)}
                variant='contained'>
                Send Message
                <img src={airplane} alt='Send' style={{ marginLeft: '1rem' }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: '1302' }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? '15em'
              : '25em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? '15em'
              : '25em',
          },
        }}>
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                fullWidth
                label='Name'
                value={name}
                id='name'
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label='Email'
                value={email}
                id='email'
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                fullWidth
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                label='Phone'
                value={phone}
                id='phone'
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
              <TextField
                id='message'
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                placeholder='message'
                rows={8}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSM ? 'column' : 'row'}
              style={{ marginTop: '2em' }}
              alignItems='center'>
              <Grid item>
                <Button
                  style={{ fontWeight: 300 }}
                  onClick={() => setOpen(false)}
                  color='primary'>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  className={classes.sendBottom}
                  onClick={() => setOpen(true)}
                  variant='contained'>
                  Send Message
                  <img
                    src={airplane}
                    alt='Send'
                    style={{ marginLeft: '1rem' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        alignItems='center'
        className={classes.background}
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        lx={9}>
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}>
          <Grid container direction='column'>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
                Simple Software.
                <br />
                Revolutionary Resukts
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.5rem' }}
                variant='subtitle2'>
                Take advantage of 21st Century.
              </Typography>
            </Grid>
            <Grid item justify={matchesMD ? 'center' : undefined} container>
              <Button
                onClick={() => props.setValue(2)}
                component={Link}
                to='/revolutions'
                variant='outlined'
                className={classes.learnBotton}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.Blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => props.setValue(5)}
            component={Link}
            to='/estimate'
            variant='contained'
            className={classes.estimateButton}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
