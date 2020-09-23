import React from 'react';
import 	Lottie from "react-lottie"
import {Link} from "react-router-dom"
import {makeStyles, useTheme} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ButtonArrow from "../components/ui/ButtonArrow"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

import CallToAction from "./ui/CallToAction"

import animationData from "../animations/landinganimation/data" 
import customSoftwareIcon from "../assets/Custom Software Icon.svg"
import mobileAppIcon from "../assets/mobileIcon.svg"
import websiteIcon from "../assets/websiteIcon.svg"
import revolutionBackground from "../assets/repeatingBackground.svg"
import infoBackground from "../assets/infoBackground.svg"


const useStyles = makeStyles(theme =>({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]:{
      maxWidth: "30em"
    }
  },
  estimateButton:{
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.Orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover":{
      backgroundColor: theme.palette.secondary.light
    }
  },
  buttonContainer:{
    marginTop: "1em"
  },
  learnBottonHero:{
    ...theme.typography.learnBotton,
    fortSize: "0.9rem",
    height: 45,
    width: 145
  },
  learnBotton:{
    ...theme.typography.learnBotton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]:{
      marginBottom: "2em"
    }
  },
  mainContainer:{
    marginTop: "5em",
    [theme.breakpoints.down("md")]:{
      marginTop: "3em"
    },
     [theme.breakpoints.down("xs")]:{
      marginTop: "2em"
    }
  },
  heroTextContainer:{
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]:{
      marginLeft: 0
    }
  },
  spacialText:{
    fontFamily: "Pacifico",
    color: theme.palette.common.Orange
  },
  subtitle:{
    marginBottom: "1em"
  },
  icon:{
    marginLeft: '2em',
    [theme.breakpoints.down("xs")]:{
      marginLeft: 0
    }
  },
  serviceContainer:{
    marginTop: "12em",
    [theme.breakpoints.down("sm")]:{
      padding: 25
    }
  },
  revolutionBackground:{
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat : "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard:{
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding : "9em",
    [theme.breakpoints.down("sm")]:{
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingRight: 0,
      paddingLeft : 0,
      borderRadius: 0,
      width: "100%"
    }
  },
   infoBackground:{
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat : "no-repeat",
    height: "100%",
    width: "100%"
  },

}))

function LandingPage(props) {

	const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

	const defaultOptions = {
      loop: true,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

  return(
  		<Grid container direction="column" className={classes.mainContainer}>
  			<Grid item> {/*-----Hero Block-----*/}
  				<Grid container justify="flex-end" alignItems="center" direction="row">
  					<Grid sm item className={classes.heroTextContainer}>
  						<Typography variant="h2" align="center">
                 Bringing West Coast Technology 
                 <br /> 
                 to the Midwest
                </Typography>
  						<Grid container justify="center" className={classes.buttonContainer}>
  							<Grid item>
  								<Button onClick={()=>props.setValue(5)} component={Link} to="/estimate" className={classes.estimateButton} variant="contained">Free Estimate</Button>
  							</Grid>
  							<Grid item>
  								<Button onClick={()=>props.setValue(2)} component={Link} to="/revolutions" variant="outlined" className={classes.learnBottonHero}>
                   <span style={{marginRight: 10}}>Learn More</span>
  								<ButtonArrow width={15} height={15} fill={theme.palette.common.Blue} />
  								</Button>
  							</Grid>
  						</Grid>
  					</Grid>
  					<Grid sm item className={classes.animation}>
  						<Lottie  options={defaultOptions} height={"100%"} width={"100%"} />
  					</Grid>
  				</Grid>
  			</Grid>
        <Grid item> {/*-----Custom Software Block-----*/}
           <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined} >
              <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                <Typography variant="h4">
                   Custom Software Development 
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} >
                  Save Energy. Save Time. Save Money.
                </Typography>
                <Typography variant="subtitle1">
                  Complete digital solutions, from investigation to{" "} 
                  <span className={classes.spacialText} >celebration</span>
                </Typography>
                <Button onClick={()=> {props.setValue(1); props.setSelectedIndex(1)}}  component={Link} to="/customesoftware" variant="outlined" className={classes.learnBotton}>
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.Blue} />
                </Button>
              </Grid>
              <Grid item >
                <img className={classes.icon} src={customSoftwareIcon} alt="Custom Software Icon"/>
              </Grid>
           </Grid> 
        </Grid>
          <Grid item> {/*-----iOS/Android Block-----*/}
           <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"} >
              <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
                <Typography variant="h4">
                   iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} >
                  Extend Functionality. Extend Access. Increase Engagement.
                </Typography>
                <Typography variant="subtitle1">
                  Integerate your web experience or create a standalone 
                  app {matchesSM ? null: <br/>} with either mobile platform.
                </Typography>
                <Button onClick={()=> {props.setValue(1); props.setSelectedIndex(2)}} component={Link} to="/mobileapp" variant="outlined" className={classes.learnBotton}>
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.Blue} />
                </Button>
              </Grid>
              <Grid item style={{marginRight: matchesSM ? 0 : "5em"}} >
                <img className={classes.icon} src={mobileAppIcon} alt="Mobile App Icon"/>
              </Grid>
           </Grid> 
        </Grid>
          <Grid item> {/*----- Websites Block-----*/}
           <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined} >
              <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}>
                <Typography variant="h4">
                   Website Development 
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle} >
                  Read More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1">
                  Optimized for Search Engines, built for speed.
                </Typography>
                <Button onClick={()=> {props.setValue(1); props.setSelectedIndex(3)}} component={Link} to="/website" variant="outlined" className={classes.learnBotton}>
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.Blue} />
                </Button>
              </Grid>
              <Grid item >
                <img className={classes.icon} src={websiteIcon} alt="Websites Icon"/>
              </Grid>
           </Grid> 
        </Grid>

        <Grid item >  {/*----Card Block-----*/}
          <Grid container style={{height: "100em", marginTop: "12em"}} alignItems="center" justify="center"> 
            <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{textAlign: "center"}}>
                 <Grid item>
                    <Typography variant="h3" gutterBottom={true} >The Revolution</Typography>
                 </Grid> 
                 <Grid item>
                   <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is a 
                      rescipe for Revolution 
                   </Typography>
                    <Button onClick={()=> props.setValue(2)} component={Link} to="/revolutions" variant="outlined" className={classes.learnBotton}>
                      <span style={{marginRight: 10}}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill={theme.palette.common.Blue} />
                </Button>
                 </Grid>
              </Grid>
            </CardContent>
          </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>
        <Grid item> {/*-----Infrmation Block------*/}
            <Grid container style={{height: "80em"}} direction="row" alignItems="center" className={classes.infoBackground}>
                <Grid item container style={{textAlign: matchesXS ? "center" : "inherit"}} direction={matchesXS ? "column" : "row"} >
                     <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em"}}>
                  <Grid container style={{marginBottom: matchesXS ? "10em" : 0}} direction="column">
                    <Typography variant="h2" style={{color: "white"}}>About Us</Typography>
                    <Typography variant="subtitle2">Let's get personal.</Typography>
                      <Grid item>
                        <Button  onClick={()=> props.setValue(3)}  component={Link} to="/revolutions"  style={{color: "white", borderColor: "white"}} variant="outlined" className={classes.learnBotton}>
                        <span style={{marginRight: 10}}>Learn More</span>
                         <ButtonArrow width={10} height={10} fill="white" />
                      </Button>
                      </Grid>
                  </Grid>
                </Grid>
                 <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right"}}>
                  <Grid container direction="column">
                    <Typography variant="h2" style={{color: "white"}}>Contact Us</Typography>
                    <Typography variant="subtitle2">Say hello! <span role="img" aria-label="waving hand" ></span> </Typography>
                      <Grid item>
                        <Button  onClick={()=> props.setValue(4)}  component={Link} to="/contact"  style={{color: "white", borderColor: "white"}} variant="outlined" className={classes.learnBotton}>
                        <span style={{marginRight: 10}}>Learn More</span>
                         <ButtonArrow width={10} height={10} fill="white" />
                      </Button>
                      </Grid>
                  </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
          <CallToAction setValue={props.setValue} /> {/*-----call to acton-----*/}
        </Grid>
  		</Grid>
  		
  	)
 
}

export default LandingPage
