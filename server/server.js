require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')  
const nodemailer = require('nodemailer')
const massive = require('massive')


const app = express();

app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})

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

app.get('/api/get', (req,res) => {
    const db = req.app.get('db')

    db.getimages()
        .then(response => res.status(200).send(response))
        .catch(err => console.log(err))
})

app.post('/api/newphoto', (req,res) => {
    const db = req.app.get('db');
    const {url} = req.body;

    db.newlink([url])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err))
})

app.delete('/api/delete/:id', (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params

    db.delete([id])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err))
})

app.listen(process.env.SERVER_PORT, () =>  console.log(`Server listening on ${process.env.SERVER_PORT}`))

