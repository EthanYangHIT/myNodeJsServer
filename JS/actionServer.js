/**
 * Created by yangyusenhit on 2016/3/1.
 */
function login(req, res) {
    console.log("login...");
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + 10000);
    console.log(req.method);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("login");
    res.end();
}
function upload(req, res) {
    console.log("uploading...");
    console.log(req.method);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("upload");
    res.end();
}
function download(req, res) {
    console.log("downloading...");
}
function notFound(req, res) {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not Found");
    res.end();
}
exports.login = login;
exports.upload = upload;
exports.download = download;
exports.notFound = notFound;