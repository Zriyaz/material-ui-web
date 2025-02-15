import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from '../components/ui/ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
        justify={matchesMD ? 'center' : undefined}>
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              onClick={() => props.setSelectedIndex(1)}
              to='/customesoftware'>
              <img src={backArrow} alt='back to custome software page ' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              varian='body1'
              paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              onClick={() => props.setSelectedIndex(3)}
              to='/website'>
              <img src={forwardArrow} alt='go to next website page ' />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginTop: '15em', marginBottom: '15em' }}
        className={classes.rowContainer}>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant='h4'
              gutterBottom>
              Integeraton
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant='body1'
              paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              variant='body1'
              paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : 'right'}
              variant='h4'
              gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              align='right'
              variant='body1'
              paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? 'center' : undefined}
              align='right'
              variant='body1'
              paragraph>
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        style={{ marginBottom: '15em' }}
        className={classes.rowContainer}>
        <Grid item container alignItems='center' direction='column' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss army knife' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems='center'
          direction='column'
          md
          style={{
            marginTop: matchesMD ? '10em' : 0,
            marginBottom: matchesMD ? '10em' : 0,
          }}>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              style={{ maxWidth: matchesXS ? '20em' : '28em' }}
              alt='tear-of-sign'
            />
          </Grid>
        </Grid>
        <Grid item container alignItems='center' direction='column' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt='swiss army knife' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
