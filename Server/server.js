const dotenv = require('dotenv');
const app = require('./index.js');


const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});