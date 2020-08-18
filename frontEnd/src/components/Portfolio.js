import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Navbar from "./Navbar";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";


const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height:"100%"
    },
    cardContainter: {
        maxWidth:345,
       
        margin:"5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer} >
            <Navbar />
            <Grid container justify="center" >
                {/* Project1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainter} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1}
                             ></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p" >
                                    LoremDolore ad et ipsum aliquip deserunt ut. Ullamco ex enim minim elit ipsum ad officia fugiat dolor do proident occaecat duis commodo. Ipsum esse consequat tempor tempor tempor nisi reprehenderit labore. Ut laborum reprehenderit ipsum velit anim quis. Voluptate aute dolore elit cupidatat sunt tempor.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Share
                                </Button>
                                <Button size="small" color="primary" >
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                  {/* Project 2 */}
                  <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainter} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                             ></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p" >
                                    LoremDolore ad et ipsum aliquip deserunt ut. Ullamco ex enim minim elit ipsum ad officia fugiat dolor do proident occaecat duis commodo. Ipsum esse consequat tempor tempor tempor nisi reprehenderit labore. Ut laborum reprehenderit ipsum velit anim quis. Voluptate aute dolore elit cupidatat sunt tempor.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Share
                                </Button>
                                <Button size="small" color="primary" >
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                
                  {/* Project 3 */}
                  <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainter} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                             ></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p" >
                                    LoremDolore ad et ipsum aliquip deserunt ut. Ullamco ex enim minim elit ipsum ad officia fugiat dolor do proident occaecat duis commodo. Ipsum esse consequat tempor tempor tempor nisi reprehenderit labore. Ut laborum reprehenderit ipsum velit anim quis. Voluptate aute dolore elit cupidatat sunt tempor.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Share
                                </Button>
                                <Button size="small" color="primary" >
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

                
                
                  {/* Project 4 */}
                  <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainter} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project4}
                             ></CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p" >
                                    LoremDolore ad et ipsum aliquip deserunt ut. Ullamco ex enim minim elit ipsum ad officia fugiat dolor do proident occaecat duis commodo. Ipsum esse consequat tempor tempor tempor nisi reprehenderit labore. Ut laborum reprehenderit ipsum velit anim quis. Voluptate aute dolore elit cupidatat sunt tempor.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" >
                                    Share
                                </Button>
                                <Button size="small" color="primary" >
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>

            </Grid>

        </Box>
    )
}

export default Portfolio
