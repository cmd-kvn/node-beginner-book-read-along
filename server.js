// require the http module
var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received`);

        route(handle, pathname, response);
        // expect ^route^ to take care of the response object
        // response.writeHead(200, { 'Content-Type': 'text/plain' });
        // var content = route(handle, pathname)
        // response.write(content);
        // response.end();
    }

    // `createServer` is a function on the http module and returns an object
    // listen is a method on the returned object that takes the port #
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
}

exports.start = start;
