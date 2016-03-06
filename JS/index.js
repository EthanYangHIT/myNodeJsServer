/**
 * Created by yangyusenhit on 2016/3/1.
 */
var server = require("./server");  //服务
var router = require("./router");  //路由
var port = 8888; //端口

server.start(router, port);