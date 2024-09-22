// Create web server
// Load http module
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    console.log('request ', request.url);

    if (request.url === '/comments') {
        fs.readFile('comments.json', 'utf8', function(err, data) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(data);
        });
    } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    }
});

// Listen on port 8000, IP defaults to