const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 6001;
app.use(express.json());
const {Job, Application}= require('./TaskModel.js')

mongoose.connect('mongodb://localhost:27017/database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{

    // Get all jobs
        app.get('/', async (req, res) => {
            try {
            const jobs = await Job.find();
            res.json(jobs);
            } catch (err) {
            res.status(500).json({ message: err.message });
            }
        });

    // Create a new job
        app.post('/new-job', async (req, res) => {
            const job = new Job({
                title: req.body.title,
                description: req.body.description,
            });
            try {
                const newjob = await Job.save();
                res.status(201).json(newjob);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        });
  
    // Update a job
        app.put('/:id', async (req, res) => {

            try{
                const job = await Job.findById(req.params.id);
                job.title = req.body.title;
                job.description = req.body.description;
                const updatedjob = await job.save();
                res.status(201).json(updatedjob);
            }catch(err){
                res.status(400).json({ message: err.message });
            }

        });
  
    // Delete a job
        app.delete('/delete-task/:id', async (req, res) => {
            try{
                await Job.deleteOne({_id: req.params.id});

                res.status(201).json({message: "job deleted"});
            }catch(err){
                res.status(400).json({ message: err.message });
            }
        });

    //Apply for a job
        app.post('/apply-job', async(req, res)=>{
            const {jobId, applicantName, applicantId} = req.body;
            try{
                const application = new Application({jobId, applicantName, applicantId});

                const newApplication = await application.save();

                res.status(201).json(newApplication);
            }catch(err){
                res.status(400).json({ message: err.message });
            }
        })
    
    //Approve job application
        app.post('/approve-application/:id', async(req, res)=>{
            try{
                const application = await Application.findById(req.params.id);
                application.status = "Accepted";
                await application.save();
                res.status(201).json(application);
            }catch(err){
                res.status(400).json({ message: err.message });
            }
        })
}
)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
