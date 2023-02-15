const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const movies = [{
        id: 1,
        title: 'Top Gun: Maverick',
        year: 2022
    }, {
        id: 3,
        title: 'Avatar: The Way of Water',
        year: 2022
    }, {
        id: 4,
        title: 'Black Panther: Wakanda Forever',
        year: 2022
    }];

app.use(cors());
app.use(express.json());

/**
 *  GET     /movies
 *  GET     /movies/{id}
 *  POST    /movies
 *  PUT     /movies/{id}
 *  DELETE  /movies/{id}
 */
/** YOUR CODE BEGINS HERE */



/** YOUR CODE ENDS HERE */

app.listen(port, () => {
    console.log(`Movie API listening on port ${port}`);
});