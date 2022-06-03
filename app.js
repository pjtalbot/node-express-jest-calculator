const express = require('express');
const { findMean, findMedian, findMode, inputValidation } = require('./ops');
const ExpressError = require('./expressError')

NUMS = [1,2,3]


const app = express();

// need to configure express

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/findMean', function(req, res) {
  

    
    let nums = req.query.nums
    let result = findMean(nums)
    return res.send(`${result}`)
  });

  app.get('/findMedian', function(req, res) {

    // 
    let nums = req.query.nums
    let result = findMedian(nums)
    
    return res.send(`${result}`)
  });


  app.listen(3000, function() {
    console.log('Server started on port 3000.');
  });

  app.get('/findMode', function(req, res) {

    // use hashmap

    let nums = req.query.nums
    let result = findMode(nums)

    return res.send(`${result}`)



return res.send()
    // 
    
   });