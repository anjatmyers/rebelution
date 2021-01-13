const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


router.get('/album/:id', (req, res) => {

    let albums = dataFile.albums;
    let album = [];
   
    albums.forEach(albumObj => {

        if(albumObj.shortname === req.params.id){

            album.push(albumObj)
    
        }
      })

    res.render('album', {
        albums: albums, 
        album: album, 
        pageTitle: 'Album'
    })
})






module.exports = router;