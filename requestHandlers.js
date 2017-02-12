var exec = require('child_process').exec;

function start(response) {
    console.log('request handler "start" was called.');

    

    /* // this blocking function stops fn upload() from immediately executing
    function sleep(msec) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + msec);
    }
   
     sleep(10000); // Node.js waits 10 sec and only then returns '...' */

    // exec is a non-blocking operation
    // it executes a shell command from within Node.js
    exec('ls-lah', function(error, stdout, stderr){
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(stdout);
        response.end();

    });

}

function upload(response) {
    console.log('request handler "upload" was called.');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('hello upload from reqHandlers.js');
    response.end();

}

exports.start = start;
exports.upload = upload;
