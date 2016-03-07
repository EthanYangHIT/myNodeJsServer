/**
 * Created by yangyusenhit on 2016/3/1.
 */
var fs = require("fs");
var mime = require("mime");
var url = require("url");

function css(path, res) {
    var filePath = '..' + path;
    fs.readFile(filePath, function (err, data) {
        if (!err) {
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(data);
        }
    });
}
function notFound(path, res) {  //404 页面
    fs.readFile('../HTML/404.html', function (err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}
function login(path, res) {
    var filePath = '../HTML' + path;
    fs.readFile(filePath, function (err, data) {
        if (!err) {
            res.writeHead(200, {"Content-Type": mime.lookup(filePath)});
            res.end(data);
        } else {
            notFound(path, res);
        }
    });
}

exports.css = css;
exports.login = login;
exports.notFound = notFound;