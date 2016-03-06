/**
 * Created by yangyusenhit on 2016/3/1.
 */
var actionServer = require("./actionServer");
//路由表
var actionIndex = {
    "login": actionServer.login,
    "CSS": actionServer.css
};
//寻路
function findPath(root, path, index) {
    if (typeof root[path[index]] === 'function') {
        return root[path[index]];
    } else if (typeof root[path[index]] === 'object') {
        findPath(root[path[index]], path, index + 1);
    } else {
        return actionServer.notFound;
    }
}
function handle(pathname, res) {
    var path = pathname.split("/");
    findPath(actionIndex, path, 1)(pathname, res);
}

exports.handle = handle;