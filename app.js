var http = require('http');
//create a server object:
var port = process.env.PORT || 6443;
var msg = process.env.MSG || 'Hey this is'
http.createServer(function (req, res) {
    res.write(msg); //write a response to the client
    res.write(' Version: v2.0.0')
    res.end(); //end the response
}).listen(port); //the server object listens on port 8080

// Console will print the message
console.log('Server running');
