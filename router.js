function route(handle, pathname, response) {
    console.log('About to route a request for ' + pathname);

    // if (typeof handle[pathname] === 'function') handle[pathname]();
    // else console.log(`no request handler found for ${pathname}`);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else {
        console.log(`no request handler found for ${pathname}`);
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 not found');
        response.end();
    }
}

exports.route = route;
