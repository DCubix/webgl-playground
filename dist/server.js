const express = require('express');

const app = express();
app.listen(8080);

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

console.log('Server started at http://localhost:8080');