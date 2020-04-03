const express = require('express');
const app = express();

//1. Make your port number dynamic
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html')
});


app.listen(port, function () {
    console.log('Server is listening on port ' + port);
});