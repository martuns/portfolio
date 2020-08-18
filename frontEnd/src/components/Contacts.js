import React, {Component} from 'react'
import Axios from 'axios';
import { withStyles} from "@material-ui/core/styles";
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";



const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color: "tomato",
        },
        "& label":{
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset":{
                borderColor:"tan",
            },
            "&.Mui-focused fiedlset":{
                borderColor: "tomato"
            }
        }
    }
})(TextField);


class Contacts extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone:'',
            message: '',
            disabled: false,
            emailSent: null,
            
        }
        
        
    }
    

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

   

    


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

            

    }

    


    render() 
    
   
    { 
        
        /* const classes = useStyles()
        71 className={classes.form}
        104 className={classes.button}
         */
        
       
        
        return (
            
            
            <Box component="div">  
            <Navbar/>
            <Grid container justify="center" style={{background:"#233", height:"100vh"}}>
                <Box component="form" style={{ top:"50%", left:"50%", transform: "translate(-50%, -50%)",position:"absolute"}} onSubmit={this.handleSubmit}  >
                    <Typography variant="h5" style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}}>
                        Hire or contact me..
                    </Typography>
                    <br/>
    
                    <InputField 
                    fullWidth={true} 
                    required={true}
                    id="full-name" 
                    name="name"
                    label="Name" 
                    variant="outlined" 
                    inputProps={{style:{ color:"white"}}}
                    margin="dense"
                     size="medium"
                     value={this.state.name} 
                     onChange={this.handleChange}
                     />
                    <br/>
    
                    <InputField 
                    type="email"
                    required={true}
                    fullWidth={true} 
                    label="Email" 
                    id="email" 
                    name="email"
                    variant="outlined" 
                    inputProps={{style:{ color:"white"}}}
                    margin="dense" 
                    size="medium"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    <br/>
    
                    <InputField 
                    fullWidth={true} 
                    label="Phone"
                    id="phone" 
                    name="phone" 
                    variant="outlined" 
                    inputProps={{style:{ color:"white"}}}
                    margin="dense"
                    size="medium"
                    value={this.state.phone} 
                    onChange={this.handleChange}
                     />
                    <br/>

                    <InputField 
                    fullWidth={true} 
                    required={true}
                    label="Message" 
                    id="message" 
                    name="message"
                    variant="outlined" 
                    inputProps={{style:{ color:"white"}}}
                    margin="dense"
                    size="medium"
                    value={this.state.message} 
                    onChange={this.handleChange}
                     />
                    <br/>
    
                    <Button 
                     variant="outlined" 
                     fullWidth={true} 
                     endIcon={<SendIcon/>}
                     type="submit" 
                     disabled={this.state.disabled}
                     style={{marginTop: "1rem", color:"tomato", borderColor: "tomato"}}
                     >
                        contact me
                    </Button>
                    {this.state.emailSent === true && <p style={{marginTop: "1rem", color:"tomato", borderColor: "tomato"}}>Email Sent</p>}
                    {this.state.emailSent === false && <p style={{marginTop: "1rem", color:"tomato", borderColor: "tomato"}}>Email Not Sent</p>}
                  
                </Box>
            </Grid>
                
            </Box>
        );

    };
}







export default Contacts
