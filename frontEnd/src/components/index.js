import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    pariclesCanva: {
        position: "absolute",
        opacity: "0.8"

    },

})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
           <Navbar/>
           <Header/>
            <Particles
            canvasClassName={classes.pariclesCanva}
                params={{
                    particles: {
                        number: {
                            value:40,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "triangle",
                            stroke: {
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8, 
                            random: true,
                            anim:{
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity:{
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        },
                        
                    }
                }}
            />
        </div>
    );
};

export default Home
