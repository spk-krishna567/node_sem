Exp -1 ;

const express = require('express');
const app=express();
app.listen(6001,()=>{
console.log("6001 is running")
})

Exp -2 ;

const express = require('express');
const app=express();
app.get("/",(request,response)=>{
response.send("My name is ugendra")
})
app.get("/contact",(request,response)=>{
response.send("Email : ugendra.banki@gmail.com");
})
app.listen(6001,()=>{
    console.log("6001 is running")
    })

Exp -3,5,6 :

HTML FILE :

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form action="/submit" method="post">
NAME : <input type="text" name="name" id="">
EMAIL : <input type="text" name="email" id="">
submit : <input type="submit" name="submit" id="">
</form>
</body>
</html>
Node:
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import { dirname } from "path";
import { fileURLToPath } from "url";
app.use(express.urlencoded({extended:true}));
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get("/",(req,res)=>{
res.sendFile(__dirname + "/public/index.html");
})
app.post("/submit",(req,res)=>{
console.log(req.body)
})
app.listen(6001,()=>{
console.log("6001 port is running");
AWT
14 November 2023 18:17
 New Section 1 Page 1 
console.log("6001 port is running");
})

Exp -4 :

HTML FILE :
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form action="/submit" method="post">
NAME : <input type="text" name="name" id="">
EMAIL : <input type="text" name="email" id="">
submit : <input type="submit" name="submit" id="">
</form>
</body>
</html>
Node : 
import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from "path";
import {fileURLToPath} from "url";
const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html");
})
app.post("/submit",(req,res)=>{
console.log("Name :",req.body.name);
console.log("Phno :",req.body.phno);
})
app.listen(3000,(req,res)=>{
console.log("port running 3000");
});

Exp -7 :

HTML-1:
<body>
<h1>Ugendra</h1>
</body>
Error.html FILE - HTML -2:
<body>
<h1>error</h1>
</body>
Node :
import express from 'express';
import bodyParser from 'body-parser';
 New Section 1 Page 2 
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url'
import { dirname } from 'path';
const __dir=dirname(fileURLToPath(import.meta.url));
const app=express();
app.use(express.urlencoded({extended:true}));
app.get("/detailsentry",(req,res)=>{
res.sendFile(__dir+"/public/index.html");
})
app.use((req,res,next)=>{
res.status(404).sendFile(__dir+"/public/404.html")})
app.listen(3000,(req,res)=>{
console.log("3000 port running");
})

8th Exp:

import express from 'express';
import auth from 'express-basic-auth';
const authenticate = auth({
users: { 'user': 'password' },
challenge: true,
realm: 'Private Area'
});
const app = express();
app.get('/secure', authenticate, (req, res) => {
res.send('Access granted to the secure route');
});
app.listen(3000, (req,res) => {
console.log('Server is running on port 3000');
})


var fs=require('fs');
fs.writeFile("write.txt","console.log('done')",function(err){
console.log("helloo world");
})

fs.readFile("write.txt","utf-8",function(err,data){
console.log(data);

fs.readFile("write.txt","utf-8",function(err,data){
    console.log(data);