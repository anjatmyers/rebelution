const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json');


router.get('/albums', (req, res) => {

    let albums = dataFile.albums;
    let albumPhotos = [];
    let albumTracks = [];

    albums.forEach((albumObj) => {
        albumPhotos = albumPhotos.concat(albumObj.artwork)
    })
    albums.forEach((albumObj) => {
        albumTracks = albumTracks.concat(albumObj.tracks)
    })
    res.render('albums', {
        albumPhotos: albumPhotos,
        albums: albums, 
        pageTitle: 'Rebelution Albums'
    })
})



module.exports = router;