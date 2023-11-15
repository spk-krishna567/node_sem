const createError = require('http-errors');
const express = require('express');
const app = express();
app.get('/error', (req, res, next) => {
    // Create an error and pass it to the next middleware
    next(createError(500, 'This is a test error.'));
   });
   
const errorHandler = (err, req, res, next) => {
    if (typeof err === 'string') {
       // If the error is a string, convert it to an Error object
       err = createError(err);
    }
   
    if (err.status >= 500) {
       // If the error status code is greater than or equal to 500,
       // log the error stack to the console
       console.error(err.stack);
       console.log("Error Generated");
    }
   
    // Set the response status code to the error status code
    res.status(err.status || 500);
   
    // Set the response Content-Type to 'application/json'
    res.setHeader('Content-Type', 'application/json');
   
    // Send the error message in the response body
    res.json({
       message: err.message || 'An error occurred during the request.',
    });
   };
   

// Use the error handler middleware for all routes
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
 console.log('Server is running on port 3000.');
});