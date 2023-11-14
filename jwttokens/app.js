const express=require("express");
const app=express();

const tokenvalidator=require("./middleware");

app.get('/protect-route',tokenvalidator,async(req,res)=>{
    res.json({message:'you have access to protected route'})
})

const PORT= process.env.PORT||6003;
app.listen(PORT,()=>{
    console.log("server is stated")
})