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

    app.get('/', async (req, res) => {
        try {
        const tasks = await Task.find();
        res.json(tasks);
        } catch (err) {
        res.status(500).json({ message: err.message });
        }})
    //update task
    app.put('/:id', async (req, res) => {

            try{
                const task = await Task.findById(req.params.id);
                task.title = req.body.title;
                task.description = req.body.description;
                const updatedTask = await task.save();
                res.status(201).json(updatedTask);
            }catch(err){
                res.status(400).json({ message: err.message });
            }

        });
  
    // Delete a task
        app.delete('/delete-task/:id', async (req, res) => {
            try{
                await Task.deleteOne({_id: req.params.id});

                res.status(201).json({message: "task deleted"});
            }catch(err){
                res.status(400).json({ message: err.message });
            }
        });

})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(5001,()=>{
    console.log("sever is started successfully")
})
