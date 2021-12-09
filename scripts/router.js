/**
 * lines 67 and 82 were amde with the help from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

const data = require('./dataProvider.js');
const aData = require('./artistDataProvider.js');
const gData = require('./galleryDataProvider.js');

const handleHome = app => {
    app.get('/', (req, resp) => {
        resp.send("Assignment 3, check README.md in github repo for links")
    });
}

const handlePaintings = app => {
    app.get('/api/paintings', (req, resp) => {
        resp.json(data)
    });
}

const handlePaintingsID = app => {
    app.get('/api/painting/:id', (req, resp) => {
        const matches = data.filter(p => p.paintingID == req.params.id);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no paintings for provided id" });
    });
}

const handleGalleryID = app => {
    app.get('/api/painting/gallery/:id', (req, resp) => {
        const matches = data.filter(g => g.gallery.galleryID == req.params.id);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no gallery for provided id" });
    })
}

const handleArtistID = app => {
    app.get('/api/painting/artist/:id', (req, resp) => {
        const matches = data.filter(a => a.artist.artistID == req.params.id);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no artist for provided id" });
    })
}

const handleYearMinMax = app => {
    app.get('/api/painting/year/:min/:max', (req, resp) => {
        const matches = data.filter(y => req.params.min < y.yearOfWork && y.yearOfWork < req.params.max);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no paintings between provided dates" });
    })
}

const handleTitleSearch = app => {
    app.get('/api/painting/title/:text', (req, resp) => {
        const matches = data.filter(t => t.title.toLowerCase().indexOf(req.params.text.toLowerCase()) !== -1);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no painting title with provided text" });
    })
}

const handleOneColorSearch = app => {
    app.get('/api/painting/color/:name', (req, resp) => {
        const matches = data.filter(d => {
            const domColors = d.details.annotation.dominantColors; //stores all colors
            //look through colors for matching name and return it
            for (let c of domColors) {
                if (c.name.toLowerCase().indexOf(req.params.name.toLowerCase()) !== -1)
                    return true;
            }
            return false;
        });
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no painting color with provided name" });
    })
}

const handleArtists = app => {
    app.get('/api/artists', (req, resp) => {
        resp.json(aData);
    });
}

const handleArtistsCountry = app => {
    app.get('/api/artists/:country', (req, resp) => {
        const matches = aData.filter(a => a.Nationality == req.params.country);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no artists for provided country" });
    });
}

const handleGalleries = app => {
    app.get('/api/galleries', (req, resp) => {
        resp.json(gData);
    });
}

const handleGalleriesCountry = app => {
    app.get('/api/galleries/:country', (req, resp) => {
        const matches = gData.filter(g => g.GalleryCountry == req.params.country);
        if (matches.length > 0) {
            resp.json(matches);
        }
        else
            resp.json({ "message": "no galleries for provided country" });
    });
}

module.exports = {
    handleHome,
    handlePaintings,
    handlePaintingsID,
    handleGalleryID,
    handleArtistID,
    handleYearMinMax,
    handleTitleSearch,
    handleOneColorSearch,
    handleArtists,
    handleArtistsCountry,
    handleGalleries,
    handleGalleriesCountry
}

