const express = require('express');
const app = express();

const router = require('./scripts/router.js');

router.handleHome(app);
router.handlePaintings(app);
router.handlePaintingsID(app);
router.handleGalleryID(app);
router.handleArtistID(app);
router.handleYearMinMax(app);
router.handleTitleSearch(app);
router.handleOneColorSearch(app);
router.handleArtists(app);
router.handleArtistsCountry(app);
router.handleGalleries(app);
router.handleGalleriesCountry(app);

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
});