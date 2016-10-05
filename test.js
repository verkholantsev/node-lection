// var http = require('http');
// var fs = require('fs');
// var zlib = require('zlib');
//
// var server = http.createServer(function (request, response) {
//     var stream = fs.createReadStream('./bower.json');
//
//     stream.on('error', _handleError(response));
//
//     stream
//         .pipe(zlib.createGzip())
//         .pipe(response);
// });
//
// server.listen(4000, function () {
//     console.log(4000);
// });
var child = require('child_process');

var ls = child.spawn('ls', ['.']);
var sort = child.spawn('sort');
var uniq = child.spawn('uniq');

ls.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);
