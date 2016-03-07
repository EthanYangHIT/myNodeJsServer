/**
 * Created by yangyusenhit on 2016/3/1.
 */
var http = require("http");
var url = require("url");

function start(router, port) {
    http.createServer(function (request, response) {
        var path = url.parse(request.url).pathname;
        router.handle(path, response);
    }).listen(port);
    console.log('server is ready...')
}

exports.start = start;