const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
  },
  companyName: {
    type: String
  }
});

const applicationSchema = new mongoose.Schema({
    applicantId:{
        type: String
    },
    applicantName: {
        type: String
    },
    JobId:{
        type: String,
    },
    status: {
        type: String,
        default: "Pending"
    }
})

const Job = mongoose.model('Job', jobSchema);
const Application = mongoose.model('Application', applicationSchema);

module.exports = Job;
module.exports = Application;
