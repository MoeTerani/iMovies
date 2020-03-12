const express = require('express');
const router = express.Router();
const axios = require('axios');
const API_KEY = '82d7ebf7637021b4afbf018847fd5a33'
const API_URL = 'https://api.themoviedb.org/3/'
const API_IMG = 'https://image.tmdb.org/t/p/'

// router.get('/persons', async (req, res) => {
//     const persons = JSON.parse(await readFile(`${__dirname}/../db/persons.json`));
//     res.send('Hello!');
// });


router.get('/v1/popularmovies', async (req, res) => {
    const data = await axios.get(`${API_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    // const data = await axios.get('http://www.omdbapi.com/?t=avatar&apikey=7ff2f65c')
    console.log(data.data)

    res.send(data.data)
});



module.exports = router;