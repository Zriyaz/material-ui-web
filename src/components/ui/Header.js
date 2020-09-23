import React, {useState, useEffect} from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import {Button} from "@material-ui/core"
import {Link} from "react-router-dom"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import {useTheme} from "@material-ui/core/styles" 
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
 

import logo from "../../assets/logo.svg"


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme=>({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: "3em",
			[theme.breakpoints.down("md")]:{
			marginBottom: "2em"
		},
		[theme.breakpoints.down("xs")]:{
			marginBottom: "1.25em"
		}
	},
	logo:{
		height: "8em",
		[theme.breakpoints.down("md")]:{
			height: "7em"
		},
		[theme.breakpoints.down("xs")]:{
			height: "5.5em"
		}
	},
	logoContainer:{
		padding: "0",
		"&:hover":{
			backgroundColor: "transparent"
		}
	},
	tabContainer:{
		marginLeft: "auto",
	},
	tab:{
		...theme.typography.tab,
		minWidth: 10,
		marginLeft: "25px"
	},
	button:{
		...theme.typography.estimate,
		borderRadius: "50px",
		marginLeft: "50px",
		marginRight: "25px",
		height: "45px",
		"&:hover":{
          backgroundColor: theme.palette.secondary.light
        }
	},
	menu:{
		backgroundColor: theme.palette.common.Blue,
		color :"white",
		borderRadius: "px"
	},
	menuItem:{
		...theme.typography.tab,
		opacity: 0.7,
		"&:hover":{
			opacity: 1
		}
	},
	drawerIcon:{
		height: "50px",
		width: "50px"
	},
	drawerIconContainer:{
		marginLeft: "auto",

		"&:hover":{
			backgroundColor: "transparent"
		}
	},
	drawer:{
		backgroundColor: theme.palette.common.Blue
	},
	drawerItem:{
		...theme.typography.tab,
		color: "white",
		opacity: 0.7
	},
	drawerItemEstimate:{
		backgroundColor: theme.palette.common.Orange
	},
	drawerItemSelected:{
		"& .MuiListItemText-root": {
			opacity: 1
		}
		
	},
	appBar:{
		zIndex: theme.zIndex.modal + 1
	}
}))

export default function Header(props){
	const classes = useStyles()	
	const theme = useTheme()
	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
	const matches = useMediaQuery(theme.breakpoints.down('md'))

	const [openDrawer, setOpenDrawer] = useState(false)
	const [anchoeEl, setAnchoeEl] = useState(null)
	const [openMenu, setOpenMenu] = useState(false)
	
	

	const handleChange = (e, newValue) =>{
		props.setValue(newValue)
	}

	const handleClick =(e) =>{
		setAnchoeEl(e.currentTarget)
		setOpenMenu(true)
	}

	const handleClose = (e) =>{	
		setAnchoeEl(null)
		setOpenMenu(false)
	}

	const menuOptions = [

		{name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
		{name: "Custom Software Development", link: "/customesoftware", activeIndex: 1, selectedIndex: 1},
		{name: "iOS/Android App Development", link: "/mobileapp", activeIndex: 1, selectedIndex: 2},
		{name: "Website Development", link: "/website", activeIndex: 1, selectedIndex: 3}
	]

	const routes = [
		{name: "Home", link: "/", activeIndex: 0},
		{
			name: "Services", 
			link: "/services", 
			activeIndex: 1, 
			ariaOwns: anchoeEl ? "Simple-Menu" : undefined, 
			ariaPopup: anchoeEl ? "true" : undefined,
			mouseOver: event=>handleClick(event)
		},
		{name: "Revolutions", link: "/revolutions", activeIndex: 2},
		{name: "About Us", link: "/about", activeIndex: 3},
		{name: "Contact", link: "/contact", activeIndex: 4},
	]

	const handleMenuItemClick = (e, i)=>{
		setAnchoeEl(null)
		setOpenMenu(false)
		props.setSelectedIndex(i)
	} 

	useEffect(()=>{

	[...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !==props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break
          case "/estimate":
          props.setValue(5)
          break
        default:
          break;
      }
    })

	},[props.value, menuOptions, props.selectedIndex, routes])


	const tabs =(
		<>
		   <Tabs 
		     indicatorColor="primary" 
		     value={props.value} 
		     onChange={handleChange} 
		     className={classes.tabContainer}>

		     	{ routes.map((route, index)=>(
		     			<Tab 
		     			  key={`${route}${index}`}	
		     			  className={classes.tab} 
		     			  component={Link} 
		     			  to={route.link} 
		     			  label={route.name}
		     			  aria-owns={route.ariaOwns}
		     			  aria-haspopup={route.ariaPopup}
		     			  onMouseOver={route.mouseOver}
		     			/>
		     		))
		     	}
			 	 </Tabs>
			 	 <Button component={Link} to="/estimate" onClick={() => props.setValue(5)} variant="contained" color="secondary" className={classes.button} >Free Extimate</Button>
			 	 <Menu 
			 	   id="Simple-Menu" 
			 	   classes={{paper: classes.menu}}
			 	   anchorEl={anchoeEl} 
			 	   open={openMenu} 
			 	   onClose={handleClose} 
			 	   MenuListProps={{onMouseLeave: handleClose}} 
			 	   elevation={0}
			 	   style={{zIndex: 1302}}
			 	   keepMounted

			 	   >
			 	   {
			 	   	menuOptions.map((option, i) => (
			 	   		<MenuItem
			 	   			key={`${option}${i}`}
			 	   			component={Link}
			 	   			to={option.link}
			 	   			classes = {{root: classes.menuItem}}
			 	   			onClick={(event) => {handleMenuItemClick(event, i); 
			 	   				props.setValue(1); 
			 	   				handleClose();
			 	   			}}
			 	   			selected={i === props.selectedIndex && props.value === 1}
			 	   		>
			 	   			{	
			 	   				option.name
			 	   			}
			 	   		</MenuItem>
			 	   	))
			 	}
			</Menu>	
		</>
	)

	const drawer = (

		<>
		  <SwipeableDrawer 
		   disableBackdropTransition={!iOS} 
		   disableDiscovery={iOS} 
		   open={openDrawer} 
		   onClose={()=>setOpenDrawer(false)}
		   onOpen={()=>setOpenDrawer(true)} 
		   classes={{paper: classes.drawer}}
		   >
		   <div className={classes.toolbarMargin} ></div>
		   <List disablePadding>
		   	{
		   		routes.map(route=>(
		   			<ListItem classes={{selected: classes.drawerItemSelected}}  key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link} selected={props.value === route.activeIndex} onClick={()=>{setOpenDrawer(false); props.setValue(route.activeIndex)}}>
		   				<ListItemText className={classes.drawerItem } disableTypography>{route.name}</ListItemText>
		   			</ListItem>
		   		))
		   	}	
		   	 <ListItem classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}  selected={props.value === 5} onClick={()=>setOpenDrawer(false)} divider button component={Link} to="/estimate">
		   	 	<ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
		   	 </ListItem>
		   </List>
		  </SwipeableDrawer>
		  <IconButton 
		   className={classes.drawerIconContainer} 
		   onClick={()=> setOpenDrawer(!openDrawer)}
		   disableRipple 
		  >
		  	<MenuIcon className={classes.drawerIcon} />
		  </IconButton>	
		</>
	)



	return(
		<>
		 <ElevationScroll>
		   <AppBar position="fixed" color="primary" className={classes.appBar} >
			  <Toolbar disableGutters >
			  	<Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={()=>props.setValue(0)}>
			  		<img src={logo} className={classes.logo} alt="company logo" />		
			  	</Button>
			 	 {
			 	 	matches ? drawer : tabs 
			 	 }
			 	
			  </Toolbar>
		   </AppBar>
		 </ElevationScroll>
		 <div className={classes.toolbarMargin} />
	  </>
	)
}