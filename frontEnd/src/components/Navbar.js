import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobilRigthMenuSlider from "@material-ui/core/Drawer"
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon

} from "@material-ui/core";

import TouchAppIcon from '@material-ui/icons/TouchApp';

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail

} from '@material-ui/icons';
import avatar from '../avatar.png';


//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem: {
        color: "tan"
    }

}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }
    const classes = useStyles();
    const sideList = slider => (

        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Jeremy Irons" />
            <Divider />
            <List>
                {menuItems.map((IsItem, key) => (
                    <ListItem button key={key} component={Link} to={IsItem.listPath} >
                        <ListItemIcon className={classes.listItem} > {IsItem.listIcon} </ListItemIcon>
                        <ListItemText
                            className={classes.listItem}
                            primary={IsItem.listText} >
                        </ListItemText>
                    </ListItem>
                ))}
            </List>

        </Box>
    )
    return (
        <>
            <Box component="nav" >
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)} >
                            <TouchAppIcon style={{ color: "white" }} />
                        </IconButton>
                        <Typography variant="h6" style={{ color: "tan" }} >
                           Click here..
                    </Typography>
                        <MobilRigthMenuSlider
                            anchor="right"
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >


                            {sideList("right")}

                            <Footer />

                        </MobilRigthMenuSlider>
                    </Toolbar>

                </AppBar>


                
            </Box>
        </>
    )
}

export default Navbar
