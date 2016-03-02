/**
 * Created by yangyusenhit on 2016/3/1.
 */

var childProcess = require("child_process");

exports.hello = function (res) {
    var n = childProcess.fork(__dirname + "/subProcess.js");
    n.on('message', function () {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("say hello.");
        res.end();
    });
    n.send({});
};

exports.upload = function (res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("upload");
    res.end();
};

function sleep(milliSecond) {
    var startTime = new Date().getTime();
    console.log(startTime);
    while (new Date().getTime() <= milliSecond + startTime) {
    }
    console.log(new Date().getTime());
}
process.on('message', function () {
    sleep(20000);
    process.send({});
});

function handle(actionServer, pathname, req, res) {
    //路由表
    var actionIndex = {
        "/login": actionServer.login,
        "/upload": actionServer.upload,
        "/download": actionServer.download
    };

    if (typeof actionIndex[pathname] === 'function')
        return actionIndex[pathname](req, res);
    else
        return actionServer.notFound(req, res);
}

exports.handle = handle;