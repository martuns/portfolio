import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';



const useStyle = makeStyles({
    root:{
        "& .MuiBottonNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,

        },
        "& .MuiSvgIcon-root" : {
            fill: "tan",
            "&:hover" :{
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }

    }

})


const Footer = () => {
    const classes = useStyle()
    return (
        <BottomNavigation width="auto" style={{ background: "#222" }}>
            <BottomNavigationAction
            href="https://www.linkedin.com/in/martuns/"
            target='_blank'
                className={classes.root}
                style={{ padding: 0 }}
                icon={<LinkedInIcon />}
            />
            <BottomNavigationAction
                href="https://github.com/martuns"
                target='_blank'
                className={classes.root}
                style={{ padding: 0 }}
                icon={<GitHubIcon />}
            />
            
            <BottomNavigationAction
                href="https://twitter.com/martuns_"
                target='_blank'
                className={classes.root}
                style={{ padding: 0 }}
                icon={<TwitterIcon />}
               
            />
            
        </BottomNavigation>
    )
}

export default Footer
