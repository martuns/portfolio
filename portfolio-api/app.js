const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();



const cors = require("cors");


const sgMail = require('@sendgrid/mail');



const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());

var whitelist = ['http://localhost:3000', 'http://localhost:3030', 'https://sendgrid.api-docs.io']



var corsOptions = {
    origin: function (origin, callback) {
        
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))


app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});



app.post('/api/email', (req, res, next)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msj = `<strong>Nombre:</strong> ${req.body.name} <br/> <strong>Email:</strong> ${req.body.email} <br/> <strong>Message:</strong> ${req.body.message} <br/>`;

    const msg = {
        to: 'contacto@martinpascua.com.ar',
        from:'contacto@martinpascua.com.ar',
        subject: 'Website Contact from: ' + req.body.email ,
        text: req.body.email +' ' + req.body.phone + ' ' + req.body.message,
        html: msj ,
    }

    sgMail.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
})


 

 




app.listen(3030, '0.0.0.0');

