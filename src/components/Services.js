import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from '../components/ui/ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  spacialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.Orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  learnBotton: {
    ...theme.typography.learnBotton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}>
        <Typography
          align={matchesSM ? 'center' : undefined}
          variant='h2'
          gutterBottom>
          Services
        </Typography>
      </Grid>
      <Grid item>
        {' '}
        {/*-----iOS/Android Block-----*/}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
          justify={matchesSM ? 'center' : 'flex-end'}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integerate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              component={Link}
              to='/mobileapp'
              variant='outlined'
              className={classes.learnBotton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.Blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppIcon}
              alt='Mobile App Icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Custom Software Block-----*/}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}>
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}>
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.spacialText}>celebration</span>
            </Typography>
            <Button
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              component={Link}
              to='/customesoftware'
              variant='outlined'
              className={classes.learnBotton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.Blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt='Custom Software Icon'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {' '}
        {/*----- Websites Block-----*/}
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          style={{ marginBottom: matchesSM ? '1em' : '10em' }}
          justify={matchesSM ? 'center' : 'flex-end'}>
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}>
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Read More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              component={Link}
              to='/website'
              variant='outlined'
              className={classes.learnBotton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.Blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={websiteIcon}
              alt='Websites Icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
