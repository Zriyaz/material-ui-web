import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"

import {Link} from "react-router-dom"


import footerAdornment from "../../assets/Footer Adornment.svg"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import instagram from "../../assets/instagram.svg"


const useStyles = makeStyles(theme=>({
	footer:{
		backgroundColor: theme.palette.common.Blue,
		width: "100%",
		zIndex: "1302",
		position: "relative"
	},
	adornment:{
		width: "25em",
		verticalAlign: "bottom" ,
		[theme.breakpoints.down("md")]:{
			width: "20em"
		},
		[theme.breakpoints.down("xs")]:{
			width: "15em"
		},
	},
	mainContainer:{
		position: "absolute"
	},
	link:{
		color: "white",
		fontFamily: "Arial",
		fontSize: "0.75rem",
		fontWeight: "bold",
		textDecoration: "none"
	},
	gridItem:{
		margin: "3em"
	},
	icon:{
		height: "4em",
		width: "4em",
		[theme.breakpoints.down('xs')]:{
			height: "2.5em",
			width: "2.5em"
		}

	},
	socialContainer:{
		position: "absolute",
		marginTop: "-6em",
		right: "1.5em",
		[theme.breakpoints.down('xs')]:{
			right: "0.5em"
		}
	}
}))

function Footer(props) {

	const classes = useStyles()

  return (
    <footer className={classes.footer}>
    <Hidden mdDown>	
     <Grid container justify="center" className={classes.mainContainer}>
     	<Grid item className={classes.gridItem} >
     		<Grid container direction="column" spacing={2}>
     			<Grid item component={Link} onClick={()=>props.setValue(0)} to="/" className={classes.link}>Home</Grid>
     		</Grid>
     	</Grid>
     	<Grid item className={classes.gridItem}>
     		<Grid container direction="column" spacing={2}>
     			<Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}} to="/services" className={classes.link}>Services</Grid>
     			<Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}} to="/customesoftware" className={classes.link}>Custome Software Development</Grid>
     			<Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}} to="/mobileapp" className={classes.link}>iOS/Android App Development</Grid>
     			<Grid item component={Link} onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}} to="/website" className={classes.link}>Website Development</Grid>
     		</Grid>
     	</Grid>
     	<Grid item className={classes.gridItem}>
     		<Grid container direction="column" spacing={2}>
     			<Grid item component={Link} onClick={()=>props.setValue(2)} to="/revolutions" className={classes.link}>The Revolution</Grid>
     			<Grid item component={Link} onClick={()=>props.setValue(2)} to="/vision" className={classes.link}>Vision</Grid>
     			<Grid item component={Link} onClick={()=>props.setValue(2)} to="/technology" className={classes.link}>Technology</Grid>
     			<Grid item component={Link} onClick={()=>props.setValue(2)} to="/process" className={classes.link}>Process</Grid>
     		</Grid>
     	</Grid>
     	<Grid item className={classes.gridItem}>
     		<Grid container direction="column" spacing={2}>
     			<Grid item component={Link} onClick={()=>props.setValue(3)} to="/about" className={classes.link}>About Us</Grid>
     			<Grid item component={Link} onClick={()=>props.setValue(3)} to="/history" className={classes.link}>History</Grid>
     			<Grid item component={Link} onClick={()=>props.setValue(3)} to="/team" className={classes.link}>Team</Grid>
     		</Grid>
     	</Grid>
     	<Grid item className={classes.gridItem}>
     		<Grid container direction="column" spacing={2}>
     			<Grid item component={Link} onClick={()=>props.setValue(4)} to="/contact" className={classes.link}>Contact Us</Grid>     			
     		</Grid>
     	</Grid>
     </Grid>
    </Hidden>	
     <img src={footerAdornment} alt="Adornment" className={classes.adornment} />
     <Grid container className={classes.socialContainer} justify="flex-end" spacing={2} >
     	<Grid item component={"a"} href="http://www.facebook.com">
     		<img className={classes.icon} src={facebook} alt="facebook" rel="noopener noreferrer" target="_blank" />
     	</Grid>
     	<Grid item component={"a"} href="http://www.twitter.com">
     		<img className={classes.icon} src={twitter} alt="twitter" rel="noopener noreferrer" target="_blank" />
     	</Grid>
     	<Grid item component={"a"} href="http://www.instagram.com">
     		<img className={classes.icon} src={instagram} alt="instagram" rel="noopener noreferrer" target="_blank" />
     	</Grid>
     </Grid>
    </footer>
  );
}

export default Footer;
 