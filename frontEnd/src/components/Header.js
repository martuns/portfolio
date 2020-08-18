import React  from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Typography,
    Avatar, 
    Grid,
    Box
} from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";


//CSS Styles
const useStyles = makeStyles(theme=> ({
    avatar:{
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato",
        fontFamily: "'Montserrat', sans-serif"

    },
    subtitle:{
        color: "tan",
        marginBottom : "3rem",
        fontFamily: "'Montserrat', sans-serif"

    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width:"100vw",
        textAlign: "center",
        zIndex: 1
    },
    


}))

const Header = () => {
    const classes = useStyles()
    return (
     <Box className={classes.typedContainer}>
         <Grid container justify="center" >
         <Avatar className={classes.avatar} src={avatar} alt="Jerime Irons" />
         </Grid>
         <Typography className={classes.title}  variant="h4" >
             <Typed strings={["Martin Pascua"]} typeSpeed={30} />
         </Typography>
         <br/>
         <Typography className={classes.subtitle}  variant="h5" >
             <Typed strings={["JavaScript", "React", "API Rest", "Node JS", "Full Stack Developer"]} 
             typeSpeed={30}
             backSpeed={60} 
             loop
             />
         </Typography>
        
     </Box>
    )
}

export default Header
