/**
 * Created by yangyusenhit on 2016/3/1.
 */
var http = require("http");
var url = require("url");

function start(router,actionServer) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("request path: " + pathname);
        router.handle(actionServer,pathname,request,response);
    }).listen(8888);
    console.log('server is ready...')
}

exports.start = start;