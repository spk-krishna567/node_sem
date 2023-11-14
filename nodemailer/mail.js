const express=require("express");
const app=express()
const nodemailer=require("nodemailer");
const { errorMonitor } = require("nodemailer/lib/xoauth2");
app.use(express.json())
PORT=6001

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'wilburn36@ethereal.email',
        pass: 'dGy1MxF5eXbffkzwKq'
    }
});

app.post('/send-mail',async(req,res)=>{
    const {mailTo,subject,text}=req.body;
    try{
    const maildetails={
        from:"wilburn36@ethereal.email",
        to:mailTo,
        subject:subject,
        text:text
    }

    transporter.sendMail(maildetails,function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.status(201).json(data);
            console.log("mail sent successfully");
        }
    })}
    catch(err){
        res.status(500);
        console.log(errorMonitor)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  