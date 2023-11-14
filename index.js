const express=require("express");
const app=express();
app.use(express.json())
const mongoose=require("mongoose");
const Task=require('./modeltask.js');

mongoose.connect("mongodb://0.0.0.0:27017/task").then(()=>{

    //get tasks

    app.post('/new-task',async(req,res)=>{
        const task=new Task({
            title:req.body.title,
            description:req.body.description,
        });
        try{
            const newtask=await task.save()
            res.status(201).json(newtask)
        }
        catch(err){
            res.status(400).json({message:err.message})
        }
    })
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(5001,()=>{
    console.log("sever is started successfully")
});
