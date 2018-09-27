const express = require('express')
const bodyParser = require('body-parser')  
const nodemailer = require('nodemailer')
require('dotenv').config()


const app = express();

app.use(bodyParser.json())

app.use(express.static( `${__dirname}/../build`))


app.post('/api/form', (req, res) => {
    console.log('tesssss: ')
   let {name, email, message} = req.body;
   const output = `
    Job 
    Contact Details
        Name: ${name}
        email: ${email}
    
    Message:
    ${message}
    `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PSW
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Message from babaliauskasprojects.com',
        text: output
    };
 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.sendStatus(200);
        }
    });
})

app.listen(process.env.SERVER_PORT, () =>  console.log(`Server listening on ${process.env.SERVER_PORT}`))

