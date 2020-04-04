//jshint esversion:6
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
}); 

app.listen(3001, () => {
    console.log('Server listening');
});



 


