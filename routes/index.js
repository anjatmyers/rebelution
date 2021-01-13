const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


router.get('/', (req, res) => {

    let albums = dataFile.albums;
    let albumPhotos = [];

    albums.forEach((albumObj) => {
        albumPhotos = albumPhotos.concat(albumObj.artwork)
    })

    
    res.render('index', {
        albumPhotos: albumPhotos,
        pageTitle: 'Home Page'
    });
})






module.exports = router;