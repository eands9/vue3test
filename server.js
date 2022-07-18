const express=require('express');
const app=express();

const nodemailer = require("nodemailer");

const PORT=process.env.PORT || 5001;

// Middleware
app.use(express.static('public'));
app.use(express.json())

app.get('/hello', (req,res)=>{
    res.send('hello!!')
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/contactform.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "kffsande@outlook.com",
            pass: "Pwd4Kff5and3"
        }
    })

    const mailOptions = {
        from: "kffsande@outlook.com",
        to: "kffsande@outlook.com",
        subject: req.body.name + "'s order is shown below...",
        text: "Wow! That's Easy"
    }

    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log("Sent: " + info.response); 
        }
    }) 
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})