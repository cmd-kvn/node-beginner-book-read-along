var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

// pass the list of request handlers as an object
var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload']= requestHandlers.upload;

server.start(router.route, handle);

/*
In the terminal:
1. server has started // server.js
2. request for /start received // server.js
3. about to route a request for /start // router.js
4. request handler 'start' was called // requestHandlers.js
*/