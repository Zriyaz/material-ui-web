import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnBotton: {
    ...theme.typography.learnBotton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
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
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      direction={matchesSM ? 'column' : 'row'}
      alignItems='center'
      justify={matchesSM ? 'center' : 'space-between'}
      className={classes.background}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Resukts
            </Typography>
            <Typography style={{ fontSize: '1.5rem' }} variant='subtitle2'>
              Take advantage of 21st Century.
            </Typography>
          </Grid>
          <Grid item justify={matchesSM ? 'center' : undefined} container>
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
  );
};

export default CallToAction;
