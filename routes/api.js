const express = require('express');
const router = express.Router();
const feedbackData = require('../data/feedback.json');
const fs = require('fs');
// add fs core module so we can read and write to a file
router.use(express.json());
router.use(express.urlencoded({extended: false}));


router.get('/api', (req, res) => {
    res.json(feedbackData)
})

router.post('/api', (req, res) => {
    
    // grab data form request - bodyparser
    // req.body gives us access to the variables below
    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;

    // take current data and add new object
    // current data [{}, {}, {}] + {name, title, message}
    // unshift(new item)
     // write to the file feedbackData.json a new object 
    // send back all of the total data to be displayed
     console.log(req.body);
    feedbackData.unshift(req.body);
    
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
        
        if(err){
            console.log(err);
        }
    })

    res.json(feedbackData);


})


module.exports = router;